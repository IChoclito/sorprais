const ALLOWED_PREFIXES = [
    "FOTOS Y VIDIOS/ANTES DE/",
    "FOTOS Y VIDIOS/meses/"
];

const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
};

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            ...CORS_HEADERS,
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
}

export default {
    async fetch(request, env) {
        // Permitir las peticiones CORS del navegador
        if (request.method === "OPTIONS") {
            return new Response(null, {
                status: 204,
                headers: CORS_HEADERS
            });
        }

        // Solo necesitamos GET
        if (request.method !== "GET") {
            return jsonResponse(
                { error: "Método no permitido" },
                405
            );
        }

        const url = new URL(request.url);
        const prefix = url.searchParams.get("prefix");

        // Debemos recibir un prefijo
        if (!prefix) {
            return jsonResponse(
                {
                    error: "Falta el parámetro prefix"
                },
                400
            );
        }

        // Seguridad: solo permitimos nuestras carpetas
        const allowed = ALLOWED_PREFIXES.some((allowedPrefix) =>
            prefix.startsWith(allowedPrefix)
        );

        if (!allowed) {
            return jsonResponse(
                {
                    error: "Prefijo no permitido"
                },
                403
            );
        }

        try {
            const objects = [];
            let cursor;

            // R2 devuelve como máximo 1000 objetos por listado.
            // Si hubiera más, continuamos con la siguiente página.
            do {
                const options = {
                    prefix,
                    limit: 1000
                };

                if (cursor) {
                    options.cursor = cursor;
                }

                const result = await env.SORPRAISSS_BUCKET.list(options);

                objects.push(
                    ...result.objects.map((object) => ({
                        key: object.key,
                        size: object.size,
                        uploaded: object.uploaded
                    }))
                );

                cursor = result.truncated
                    ? result.cursor
                    : undefined;

            } while (cursor);

            return jsonResponse({
                success: true,
                prefix,
                count: objects.length,
                objects
            });

        } catch (error) {
            console.error("Error consultando R2:", error);

            return jsonResponse(
                {
                    error: "No se pudieron consultar los archivos de R2"
                },
                500
            );
        }
    }
};