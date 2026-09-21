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

function getContentType(key) {
    const extension = key.split(".").pop()?.toLowerCase();

    const types = {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        webp: "image/webp",
        gif: "image/gif",
        avif: "image/avif",
        mp4: "video/mp4",
        webm: "video/webm",
        mov: "video/quicktime"
    };

    return types[extension] || "application/octet-stream";
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        // =========================
        // LISTAR ARCHIVOS DE R2
        // =========================
        const prefix = url.searchParams.get("prefix");

        if (prefix) {
            if (request.method === "OPTIONS") {
                return new Response(null, {
                    status: 204,
                    headers: CORS_HEADERS
                });
            }

            if (request.method !== "GET") {
                return jsonResponse(
                    { error: "Método no permitido" },
                    405
                );
            }

            const allowed = ALLOWED_PREFIXES.some((allowedPrefix) =>
                prefix.startsWith(allowedPrefix)
            );

            if (!allowed) {
                return jsonResponse(
                    { error: "Prefijo no permitido" },
                    403
                );
            }

            try {
                const objects = [];
                let cursor;

                do {
                    const options = {
                        prefix,
                        limit: 1000
                    };

                    if (cursor) {
                        options.cursor = cursor;
                    }

                    const result =
                        await env.SORPRAISSS_BUCKET.list(options);

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
                        error:
                            "No se pudieron consultar los archivos de R2"
                    },
                    500
                );
            }
        }

        // =========================
        // SERVIR ARCHIVOS DE R2
        // =========================
        const requestedKey = decodeURIComponent(
            url.pathname.slice(1)
        );

        if (
            requestedKey.startsWith("FOTOS Y VIDIOS/ANTES DE/") ||
            requestedKey.startsWith("FOTOS Y VIDIOS/meses/")
        ) {
            try {
                const object =
                    await env.SORPRAISSS_BUCKET.get(requestedKey);

                if (!object) {
                    return new Response("Archivo no encontrado", {
                        status: 404,
                        headers: CORS_HEADERS
                    });
                }

                const headers = new Headers(CORS_HEADERS);

                headers.set(
                    "Content-Type",
                    object.httpMetadata?.contentType ||
                    getContentType(requestedKey)
                );

                headers.set("Cache-Control", "public, max-age=31536000");

                if (object.httpEtag) {
                    headers.set("ETag", object.httpEtag);
                }

                return new Response(object.body, {
                    status: 200,
                    headers
                });

            } catch (error) {
                console.error("Error sirviendo archivo R2:", error);

                return new Response(
                    "Error al obtener el archivo",
                    {
                        status: 500,
                        headers: CORS_HEADERS
                    }
                );
            }
        }

        // =========================
        // SERVIR LA WEB
        // =========================
        return env.ASSETS.fetch(request);
    }
};