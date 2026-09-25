document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    console.log("🍅 Sorpraisss iniciado correctamente");

    /* =========================================================
       CONFIGURACIÓN
    ========================================================= */

    const R2_BASE_URL =
        "https://sorprais.nicolearias875.workers.dev";

    const R2_FOLDER =
        "FOTOS Y VIDIOS";

    const AUTO_SLIDE_TIME = 5000; /* 5 SEGUNDOS PARA IMÁGENES */


    /* =========================================================
       URL DE ARCHIVOS R2
    ========================================================= */

    function mediaUrl(path) {

        if (!path) {
            return "";
        }

        if (/^https?:\/\//i.test(path)) {
            return path;
        }

        const cleanPath =
            path
                .replace(/^\/+/, "")
                .split("/")
                .filter(Boolean)
                .map(part => encodeURIComponent(part))
                .join("/");

        return (
            `${R2_BASE_URL}/` +
            `${encodeURIComponent(R2_FOLDER)}/` +
            cleanPath
        );
    }


    /* =========================================================
       OBTENER FOTOS AUTOMÁTICAMENTE DESDE R2
    ========================================================= */

    async function getR2Images(folder) {

        if (!folder) {
            return [];
        }

        const prefix =
            `${R2_FOLDER}/${folder}/`;

        const url =
            `${R2_BASE_URL}/?prefix=` +
            encodeURIComponent(prefix);

        const response =
            await fetch(url, {
                cache: "no-store"
            });

        if (!response.ok) {
            throw new Error(
                `Error al consultar R2: ${response.status}`
            );
        }

        const data =
            await response.json();

        if (
            !data ||
            !Array.isArray(data.objects)
        ) {
            return [];
        }

        const mediaExtensions =
            /\.(jpg|jpeg|png|webp|gif|avif|mp4|webm|ogg|mov|m4v)$/i;

        return data.objects
            .map(object => object.key)
            .filter(key =>
                mediaExtensions.test(key)
            )
            .map(key =>
                key.replace(
                    `${R2_FOLDER}/`,
                    ""
                )
            );
    }


    /* =========================================================
       ELEMENTOS
    ========================================================= */

    const screens =
        document.querySelectorAll(".screen");

    const mainNav =
        document.getElementById("mainNav");

    const logoHome =
        document.getElementById("logoHome");


    /* =========================================================
       MÚSICA EN LOOP (SISTEMA CORREGIDO)
    ========================================================= */

    const MUSIC_SOURCE = "https://pub-87e98aa71f684d1598882d2da16b74eb.r2.dev/FOTOS%20Y%20VIDIOS/lisa%20ono%20-%20contigo%20en%20la%20distancia%20(instrumental).mp3"; 

    if (musicToggle && backgroundMusic) {
        /* Carga la fuente de audio correctamente */
        backgroundMusic.src = mediaUrl(MUSIC_SOURCE);
        backgroundMusic.loop = true;

        musicToggle.addEventListener("click", async () => {
            /* Consultamos el estado real del elemento  */
            if (backgroundMusic.paused) {
                try {
                    await backgroundMusic.play();
                    musicToggle.classList.add("playing"); /* Borde naranja */
                } catch (error) {
                    console.error("Error al reproducir el audio. Verifica la URL de Cloudflare:", error);
                }
            } else {
                backgroundMusic.pause();
                musicToggle.classList.remove("playing"); /* Quita borde naranja */
            }
        });
    }

    /* HOME */

    const touchButton =
        document.getElementById("touchButton");


    /* PRESENTACIÓN */

    const noButton =
        document.getElementById("noButton");

    const tomorrowButton =
        document.getElementById("tomorrowButton");

    const tomorrowBack =
        document.getElementById("tomorrowBack");


    /* ORIGEN */

    const originTimeline =
        document.getElementById("originTimeline");

    const enterRelationship =
        document.getElementById("enterRelationship");


    /* MESES */

    const monthNumber =
        document.getElementById("monthNumber");

    const monthTitle =
        document.getElementById("monthTitle");

    const monthDate =
        document.getElementById("monthDate");

    const monthPhoto =
        document.getElementById("monthPhoto");

    const monthPhotoPlaceholder =
        document.getElementById(
            "monthPhotoPlaceholder"
        );

    const monthPhotoCounter =
        document.getElementById(
            "monthPhotoCounter"
        );

    const monthDots =
        document.getElementById("monthDots");

    const monthPrev =
        document.getElementById("monthPrev");

    const monthNext =
        document.getElementById("monthNext");

    const monthStory =
        document.getElementById("monthStory");

    const monthPrevButton =
        document.getElementById(
            "monthPrevButton"
        );

    const monthNextButton =
        document.getElementById(
            "monthNextButton"
        );

    const monthProgressFill =
        document.getElementById(
            "monthProgressFill"
        );

    const monthProgressText =
        document.getElementById(
            "monthProgressText"
        );

    const continueFinal =
        document.getElementById(
            "continueFinal"
        );


    /* FINAL */

    const finalHome =
        document.getElementById("finalHome");


    /* =========================================================
       NAVEGACIÓN
    ========================================================= */

    function showScreen(screenId) {

        screens.forEach(screen => {
            screen.classList.remove(
                "active-screen"
            );
        });

        const target =
            document.getElementById(screenId);

        if (!target) {
            return;
        }

        target.classList.add(
            "active-screen"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (mainNav) {
            mainNav.style.display = "flex";
        }

        /* Pausa carrusel de meses si cambiamos de pantalla */
        if (screenId !== "months") {
            stopMonthAuto();
        } else {
            startMonthAuto();
        }
    }


    /* =========================================================
       HOME
    ========================================================= */

    if (touchButton) {

        touchButton.addEventListener(
            "click",
            () => {
                showScreen("presentation");
            }
        );

    }


    /* =========================================================
       NO, NO JDS
    ========================================================= */

    if (noButton) {

        noButton.addEventListener(
            "click",
            () => {

                noButton.classList.add(
                    "clicked"
                );

                setTimeout(() => {
                    showScreen("origin");
                }, 250);

            }
        );

    }


    /* =========================================================
       OK MAÑANA
    ========================================================= */

    if (tomorrowButton) {

        tomorrowButton.addEventListener(
            "click",
            () => {
                showScreen("tomorrow");
            }
        );

    }


    if (tomorrowBack) {

        tomorrowBack.addEventListener(
            "click",
            () => {
                showScreen("presentation");
            }
        );

    }


    /* =========================================================
       LOGO
    ========================================================= */

    if (logoHome) {

        logoHome.addEventListener(
            "click",
            () => {
                showScreen("home");
            }
        );

    }


    /* =========================================================
       CÓMO EMPEZÓ TODO (HISTORIA ORIGEN)
    ========================================================= */

    const originMoments = [

        {
            title: "Mr bean :v",

            date:
                "26 de septiembre de 2023",

            description:
                "Recuerdas como se llamaba el curso? jdjdsj. Eras delegado en ese entonces, yo no conocia a nadie, quise encajar con mi chiste del taper (nadie entendió la vibra) y el profesor te dijo que me agregaras al grupo, asi fue como intercambiamos números..",

            folder:
                "ANTES DE/Mr bean :v"
        },


        {
            title:
                "hola y adiós",

            date:
                "2023–2024",

            description:
                "Quizás para ti no fue nada pero aquella navidad del 2023 andaba un poco deprimida. Y en eso.. suena tu notificación,.. todavia recuerdo que vi la pantalla extrañada por que era de las personas de las que menos me lo esperaba. Despues de todo hablabamos solo por el curso que arruinaba mi horario, me recordó a los viejitos que comparten el mensaje a todos sus contactos para tener suerte en todo el año jejejej Luego tbm cuando me saludaste por mi cumple un día despues ;v",

            folder:
                "ANTES DE/hola y adiós"
        },


        {
            title:
                "Ed fisica",

            date:
                "Inicios de septiembre",

            description:
                "Cuando me pediste de favor que te agregue al grupo (no había) y a partir de eso empezamos a hablar...",

            folder:
                "ANTES DE/Ed fisica"
        },


        {
            title:
                "Sticker ramdoms nyejjejek",

            date:
                "2024",

            description:
                "Dejamos de hablar solo de cursos, poco a poco nuestras conversaciones se llenaron de memes, chistes y muchos stickers de gatos. Recuerdas la foto de mi paloma comiendo palomitas? me dijiste todo seco que estabas ocupado y te dejé de hablar puajdjakdaskd",

            folder:
                "ANTES DE/Sticker ramdoms nyejjejek"
        },


        {
            title:
                "SDCH",

            date:
                "2024",

            description:
                "Y llegaron los Sábados de Chismesito. Recuerdo que fue porque te estaba enviando un audio largo despues del trabajo, era madrugada y dijiste que todavia estabas despierto asi que no habria problema con que saliera una llamada, y estuvimos hablando y llegamos a tocar temas personales con mis reales 'preguntas para hacer amigos', preguntas que empezaban tranquilas y terminaban de madrugada hablando de cualquier cosa (recordé cuando hice un chiste y tu dormias al lado de tus hermanos que casi los despiertas xdd)",

            folder:
                "ANTES DE/SDCH"
        },


        {
            title:
                "Ayacucho",

            date:
                "Finales de septiembre – inicios de octubre",

            description:
                "Te fuiste a Ayacucho a trabajar durante una semana aprox. No tenias mucha señal, y yo seguía escribiéndote. En ese entonces no quería que lo vieras raro, solo me estaba acostumbrando a tu compañía. Ahí fue cuando me dijiste que me llevarías a visitar algun día..",

            folder:
                "ANTES DE/Ayacucho"
        },


        {
            title:
                "Cuando eramos fit",

            date:
                "2024",

            description:
                "Aquel entonces jugábamos vóley, básquet, fútbol con tus compañeros, corríamos alrededor de la cancha. Y casi siempre llegabamos tarde a nuestras casas, bueno en tu caso peor, aunque era divertido. Recuerdas las veces que jugabamos derribadas? llegaban los mosquitos y yo siempre me ponia vic, cuando te pasé limón por el brazo.. y cuando jugamos tanto a derribarnos que al día siguiente estabamos muertos? jdjdjds recuerdo que ese jueves tenía prácticas y no podía ni moverme, pero apenas nos encontramos nos pusimos a jugar así hechos mrd jjasja ",

            folder:
                "ANTES DE/Cuando eramos fit"
        },


        {
            title:
                "Salidas espontáneas",

            date:
                "2024",

            description:
                "Cuando fuimos el cementerio de animales con un choco de HH y un trago dulce (donde me maree xdd), hicimos una torre de piedritas tbm y que casi nos muerde un perro. Luego cuando terminamos viajando a Matucana, como pasó no sabemos, simplemente ocurrieron y que terminé disfrutando mucho.",

            folder:
                "ANTES DE/Salidas espontáneas"
        },


        {
            title:
                "Esa noche..",

            date:
                "2024",

            description:
                "Empezamos en la cancha de la universidad jugando y molestándonos, pero terminamos hablando de cosas mucho más personales. Sentí que el tiempo se detuvo. Solo éramos tú y yo, intentando bailar una especie de salsa-vals, y hubo un momento en que estuvimos tan cerca que no supe qué hacer. Nunca había experimentado algo así con nadie y, sobre todo, no quería sobrepensarlo. Perdimos tanto la noción del tiempo que ni nos dijimos cuenta de que ya eran casi las 11pm. Eso último no salió tan bien porque los de seguridad terminaron acompañándonos hasta el paradero jdjd Pero me encanta recordar ese día. Esa mezcla de confusión, fragilidad y afecto me reveló aquello a lo que tanto le tenía miedo, pero que al mismo tiempo me hizo sentir tan viva",

            folder:
                "ANTES DE/Esa noche"
        },


        {
            title:
                "Vacaciones y distancia",

            date:
                "Enero – inicios de abril de 2025",

            description:
                "Llegaron las vacas y chalemente ya no podíamos vernos con la misma facilidad. Ambos vivíamos lejos además de que trabajabamos, así que muchas veces teníamos que encontrarnos en Centro de Lima. Aun así, seguimos hablando y viéndonos aproximadamente una vez al mes (aveces 2 :v). Tbm estaban esos audios de más de 30 minutos que, de alguna manera, siempre eras capaz de escucharlas. En enero cuando nos besamos jeje. Fue extraño, no hablamos mucho de eso, pero desde ese momento ya no podíamos fingir que no sabíamos",

            folder:
                "ANTES DE/Vacaciones y distancia"
        },


        {
            title:
                "Qué somos?",

            date:
                "2025",

            description:
                "Después de todo lo que había pasado, cada vez era más difícil hacer como si entre nosotros no hubiera algo. Seguíamos saliendo y hablando, mientras los dos sabíamos lo que sentíamos. En aquel entonces empecé a abrumarme, temía que al final estoy arriesgandome a que seamos unos casi algo y nada más. Pero igual seguí esperandote, hasta que te sintieras listo",

            folder:
                "ANTES DE/Qué somos?"
        },


        {
            title:
                "Antioquía",

            date:
                "Agosto de 2025",

            description:
                "Querías invitarme a viajar a Antioquía. Yo recuerdo haber desanimando el plan. Lo que no sabía era que tenías pensado aprovechar ese viaje para decirme lo que sentías y preguntarme si quería estar contigo. Había arruinado la sorpresa :C ...",

            folder:
                "ANTES DE/Antioquía"
        },


        {
            title:
                "Cumpleversario",

            date:
                "septiembre de 2025",

            description:
                "Estuvimos planeando a donde es que iriamos por tu cumpleaños y dijimos normal Ichoca, investigamos nos preparamos y nos fuimos. A mitad de camino nos dimos cuenta que habia otros distritos buenos qué visitar asi que sin pensarlo más nos bajamos en el distrito de Surco (nos arrepentimos ahi nomás) estábamos perdidos, pero decidimos darle una oportunidad. Terca yo que quise ir a la catarata más lejana y pensar que lo hariamos en menos tiempo jdjj... y asi nos fuimos a Pala Cala con la ayuda de perejil. El camino fue tan largo que ya pareciamos cencistas pero valio la pena, jeje una lástima haber llegado tarde que el sol hasta se habia ido así que ya decidimos no meternos. La caminata de regreso fue otra cosa, nos agarro la noche y todo pero lo logramos. Tuvimos que dejar a perejil pero fue un buen guía, lo compensamos con comidita antes de que decida mordernos a uno de los 2 xdd. Luego llegó tu cumpleaños y de paso el cumpleaños de la hijita de tu compañera. Antes de salir, me diste un pequeño regalito y finalmente lograste decirme lo que teniamos pendiente de Antioquía (aunque hubiese querido que fuera mas cursi)",

            folder:
                "ANTES DE/Cumpleversario"
        }

    ];


    /* =========================================================
       ESTADOS DE CARRUSELES ORIGEN
    ========================================================= */

    const originCarouselStates = [];


    /* =========================================================
       CREAR CARRUSEL DE ORIGEN
    ========================================================= */

    function createOriginCarousel(
        moment,
        momentIndex
    ) {

        const wrapper = document.createElement("div");
        wrapper.className = "origin-carousel";

        const viewport = document.createElement("div");
        viewport.className = "origin-carousel-viewport";
        viewport.style.display = "flex";
        viewport.style.alignItems = "center";
        viewport.style.justifyContent = "center";
        viewport.style.overflow = "hidden";

        const image = document.createElement("img");
        image.className = "origin-carousel-image";
        image.alt = moment.title || "Foto";
        image.loading = "lazy";
        image.style.maxWidth = "100%";
        image.style.maxHeight = "100%";
        image.style.width = "auto";
        image.style.height = "auto";
        image.style.objectFit = "contain";
        image.style.margin = "auto";

        const video = document.createElement("video");
        video.className = "origin-carousel-video";
        video.muted = true;
        video.autoplay = true;
        video.loop = false;
        video.playsInline = true;
        video.setAttribute("muted", "");
        video.setAttribute("playsinline", "");
        video.preload = "metadata";

        video.style.maxWidth = "100%";
        video.style.maxHeight = "100%";
        video.style.width = "auto";
        video.style.height = "auto";
        video.style.objectFit = "contain";
        video.style.margin = "auto";
        video.style.borderRadius = "10px";
        video.style.display = "none";

        viewport.appendChild(image);
        viewport.appendChild(video);

        const previousButton = document.createElement("button");
        previousButton.type = "button";
        previousButton.className = "origin-carousel-arrow origin-carousel-prev";
        previousButton.textContent = "‹";
        previousButton.setAttribute("aria-label", "Foto anterior");

        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.className = "origin-carousel-arrow origin-carousel-next";
        nextButton.textContent = "›";
        nextButton.setAttribute("aria-label", "Foto siguiente");

        const dots = document.createElement("div");
        dots.className = "origin-carousel-dots";

        wrapper.append(previousButton, viewport, nextButton, dots);

        const state = {
            photos: [],
            index: 0,
            interval: null,
            isActive: false,

            render() {
                state.stopAuto();
                dots.innerHTML = "";

                if (!state.photos.length) {
                    image.removeAttribute("src");
                    image.alt = "No hay fotos todavía";
                    wrapper.classList.add("origin-carousel-empty");
                    previousButton.style.display = "none";
                    nextButton.style.display = "none";
                    return;
                }

                wrapper.classList.remove("origin-carousel-empty");
                const total = state.photos.length;

                if (state.index >= total) state.index = total - 1;
                if (state.index < 0) state.index = 0;

                const media = state.photos[state.index];
                const isVideo = /\.(mp4|webm|ogg|mov|m4v)$/i.test(media);

                if (isVideo) {
                    image.style.display = "none";
                    video.style.display = "block";
                    video.pause();
                    video.removeAttribute("src");
                    video.currentTime = 0;
                    video.src = mediaUrl(media);
                    video.load();

                    video.onloadedmetadata = () => {
                        if (state.isActive) {
                            video.play().catch(() => {});
                        }
                    };

                    video.onended = () => {
                        if (!state.isActive) return;
                        state.next();
                    };
                } else {
                    video.pause();
                    video.onended = null;
                    video.removeAttribute("src");
                    video.style.display = "none";

                    image.style.display = "block";
                    image.src = mediaUrl(media);
                    image.alt = `${moment.title} - foto ${state.index + 1}`;
                }

                if (state.isActive) {
                    state.startAuto();
                }

                if (total <= 15) {
                    state.photos.forEach((_, index) => {
                        const dot = document.createElement("button");
                        dot.type = "button";
                        dot.className = "origin-carousel-dot";
                        if (index === state.index) dot.classList.add("active");
                        dot.setAttribute("aria-label", `Ir a la foto ${index + 1}`);
                        dot.addEventListener("click", () => {
                            state.index = index;
                            state.render();
                        });
                        dots.appendChild(dot);
                    });
                }

                previousButton.style.display = total > 1 ? "flex" : "none";
                nextButton.style.display = total > 1 ? "flex" : "none";
            },

            next() {
                if (!state.photos.length) return;
                state.index = (state.index + 1) % state.photos.length;
                state.render();
            },

            previous() {
                if (!state.photos.length) return;
                state.index = (state.index - 1 + state.photos.length) % state.photos.length;
                state.render();
            },

            startAuto() {
                state.stopAuto();
                if (!state.isActive || state.photos.length <= 1) return;

                const media = state.photos[state.index];
                const isVideo = /\.(mp4|webm|ogg|mov|m4v)$/i.test(media);

                if (isVideo) {
                    if (video.paused && video.readyState >= 2) {
                        video.play().catch(() => {});
                    }
                    return;
                }

                state.interval = setInterval(() => {
                    state.next();
                }, AUTO_SLIDE_TIME);
            },

            stopAuto() {
                if (state.interval) {
                    clearInterval(state.interval);
                    state.interval = null;
                }
                if (video && !video.paused) {
                    video.pause();
                }
            },

            restartAuto() {
                state.startAuto();
            }
        };

        previousButton.addEventListener("click", () => state.previous());
        nextButton.addEventListener("click", () => state.next());

        wrapper.addEventListener("mouseenter", () => state.stopAuto());
        wrapper.addEventListener("mouseleave", () => state.startAuto());

        let touchStartX = 0;
        viewport.addEventListener("touchstart", event => {
            if (event.touches.length) touchStartX = event.touches[0].clientX;
        }, { passive: true });

        viewport.addEventListener("touchend", event => {
            if (!event.changedTouches.length) return;
            const touchEndX = event.changedTouches[0].clientX;
            const difference = touchStartX - touchEndX;

            if (Math.abs(difference) < 40) return;
            if (difference > 0) state.next();
            else state.previous();
        }, { passive: true });

        state.render();
        originCarouselStates[momentIndex] = state;
        return wrapper;
    }


    /* =========================================================
       RENDERIZAR ORIGEN
    ========================================================= */

    function renderOriginTimeline() {
        if (!originTimeline) return;
        originTimeline.innerHTML = "";

        originMoments.forEach((moment, index) => {
            const item = document.createElement("article");
            item.className = "origin-item";

            const card = document.createElement("div");
            card.className = "origin-card";

            const date = document.createElement("span");
            date.className = "chapter-label";
            date.textContent = moment.date;

            const title = document.createElement("h3");
            title.textContent = moment.title;

            const description = document.createElement("p");
            description.textContent = moment.description;

            card.append(date, title, description, createOriginCarousel(moment, index));
            item.appendChild(card);
            originTimeline.appendChild(item);
        });
    }


    async function loadOriginPhotos() {
        await Promise.all(
            originMoments.map(async (moment, index) => {
                try {
                    const photos = await getR2Images(moment.folder);
                    const state = originCarouselStates[index];
                    if (!state) return;
                    state.photos = photos;
                    state.index = 0;
                    state.render();
                } catch (error) {
                    console.error(`Error cargando ${moment.folder}:`, error);
                }
            })
        );
    }


    function setupOriginCarouselObserver() {
        const originItems = document.querySelectorAll(".origin-item");
        if (!originItems.length) return;

        function updateActiveCarousel() {
            let bestIndex = -1;
            let bestRatio = 0;

            originItems.forEach((item, index) => {
                const state = originCarouselStates[index];
                if (!state) return;

                const rect = item.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                const visibleTop = Math.max(rect.top, 0);
                const visibleBottom = Math.min(rect.bottom, viewportHeight);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                const itemHeight = Math.max(1, rect.height);
                const ratio = visibleHeight / itemHeight;

                if (ratio > bestRatio) {
                    bestRatio = ratio;
                    bestIndex = index;
                }
            });

            if (bestIndex >= 0 && bestRatio >= 0.40) {
                originItems.forEach((_, index) => {
                    const state = originCarouselStates[index];
                    if (!state) return;

                    if (index === bestIndex) {
                        if (!state.isActive) {
                            state.isActive = true;
                            state.startAuto();
                        }
                    } else {
                        state.isActive = false;
                        state.stopAuto();
                    }
                });
            } else {
                originCarouselStates.forEach(state => {
                    if (!state) return;
                    state.isActive = false;
                    state.stopAuto();
                });
            }
        }

        const observer = new IntersectionObserver(() => updateActiveCarousel(), {
            threshold: [0, 0.25, 0.40, 0.60, 0.80]
        });

        originItems.forEach(item => observer.observe(item));

        let ticking = false;
        window.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                updateActiveCarousel();
                ticking = false;
            });
        }, { passive: true });

        updateActiveCarousel();
    }


    renderOriginTimeline();
    setupOriginCarouselObserver();
    loadOriginPhotos();


    /* =========================================================
       SECCIÓN: LOS 12 MESES
    ========================================================= */

    const months = [
        {
            number: "MES 01",
            title: "Octubre 2025",
            date: "Nuestro primer mes",
            description: "Jejej para nuestro primer mes, no nos fue nada mal. Decidimos ir a nuestro ritmo a como estábamos acostumbrados, y nos fue muy bien, me he dado cuenta que somos unos glotones (más yo); tenemos muchas fotos donde vamos a comer jdsjsd. Ah creo que ahi fue donde probamos ir en el tren por primera vez.. Deberiamos invitar a checho a comer makis de novo",
            folder: "meses/mes1"
        },
        {
            number: "MES 02",
            title: "Noviembre 2025",
            date: "Segundo mes",
            description: "Aqui fue cuando participamos en el canturobot (perdimos jsdjds) ah y despues de muchas regañadas de tu parte por fin te hice caso y me compré el colchón, ese dia en como lo llevaron me dio mucha risa parecian hormiguitas, no faltaban los SDCH y las salidas a lima d:",
            folder: "meses/mes2"
        },
        {
            number: "MES 03",
            title: "Diciembre 2025",
            date: "Tercer mes",
            description: "Esperabámos que diciembre terminara bien, aqui fue cuando probamos una promo de kfc y nos sentíamos suertudos, luego tbm cada que salía de PPP nunca faltaba su pollito. Pero derrepente tuvieron que ingresarte para la operacion de tu pata. Recuerdo que me sentí muy mal por no poder acompañarte, ninguno sabía cuanto tiempo estarías dentro y bueno de como te habrás sentido, despues de todo no te gusta que te vean en ese estado. luego de tu operación que fue justo el 23, cuando justo estaba bajando queria que me escribieras para saber si sería buena idea ir allá, pero ya te habian ingresado... despues de eso omití por completo el feriado y decidí ir a visitarte, al menos por un rato siquiera, no quería que pasaras tan mal tu navidad. Por suerte la operación salio bene..",
            folder: "meses/mes3"
        },
        {
            number: "MES 04",
            title: "Enero 2026",
            date: "Cuarto mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes4"
        },
        {
            number: "MES 05",
            title: "Febrero 2026",
            date: "Quinto mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes5"
        },
        {
            number: "MES 06",
            title: "Marzo 2026",
            date: "Sexto mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes6"
        },
        {
            number: "MES 07",
            title: "Abril 2026",
            date: "Séptimo mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes7"
        },
        {
            number: "MES 08",
            title: "Mayo 2026",
            date: "Octavo mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes8"
        },
        {
            number: "MES 09",
            title: "Junio 2026",
            date: "Noveno mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes9"
        },
        {
            number: "MES 10",
            title: "Julio 2026",
            date: "Décimo mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes10"
        },
        {
            number: "MES 11",
            title: "Agosto 2026",
            date: "Undécimo mes",
            description: "Aquí irá lo que vivimos durante este mes.",
            folder: "meses/mes11"
        },
        {
            number: "MES 12",
            title: "Septiembre 2026",
            date: "Un año juntos",
            description: "Y llegamos al mes 12. Aquí irá la historia que cierre este primer año juntos.",
            folder: "meses/mes12"
        }
    ];


    let currentMonth = 0;
    let currentMonthPhoto = 0;
    let monthTimer = null;


    /* =========================================================
       CARGAR FOTOS DE LOS MESES
    ========================================================= */

    async function loadMonthPhotos() {
        await Promise.all(
            months.map(async month => {
                try {
                    month.photos = await getR2Images(month.folder);
                } catch (error) {
                    month.photos = [];
                    console.error(`Error cargando ${month.folder}:`, error);
                }
            })
        );
        loadMonth(currentMonth);
    }


    /* =========================================================
       CARGAR MES ESPECÍFICO
    ========================================================= */

    function loadMonth(index) {
        if (index < 0 || index >= months.length) return;

        currentMonth = index;
        currentMonthPhoto = 0;

        const month = months[currentMonth];

        if (monthNumber) monthNumber.textContent = month.number;
        if (monthTitle) monthTitle.textContent = month.title;
        if (monthDate) monthDate.textContent = month.date;
        if (monthStory) monthStory.textContent = month.description;

        if (monthProgressText) {
            monthProgressText.textContent = `${currentMonth + 1} / ${months.length}`;
        }

        if (monthProgressFill) {
            monthProgressFill.style.width = `${((currentMonth + 1) / months.length) * 100}%`;
        }

        if (monthPrevButton) {
            monthPrevButton.disabled = currentMonth === 0;
        }

        if (monthNextButton) {
            monthNextButton.disabled = currentMonth === months.length - 1;
        }

        if (continueFinal) {
            continueFinal.style.display = currentMonth === months.length - 1 ? "block" : "none";
        }

        renderMonthPhoto();
    }


    /* =========================================================
       CONTROL AUTOMÁTICO DE CARRUSEL DE MESES
    ========================================================= */

    function stopMonthAuto() {
        if (monthTimer) {
            clearInterval(monthTimer);
            monthTimer = null;
        }
        const monthVideo = document.getElementById("monthVideo");
        if (monthVideo) {
            monthVideo.pause();
            monthVideo.onended = null;
        }
    }

    function startMonthAuto() {
        stopMonthAuto();

        const monthsScreen = document.getElementById("months");
        if (!monthsScreen || !monthsScreen.classList.contains("active-screen")) {
            return;
        }

        const month = months[currentMonth];
        const photos = month.photos || [];

        if (photos.length <= 1) return;

        const photo = photos[currentMonthPhoto];
        const isVideo = /\.(mp4|webm|ogg|mov|m4v)$/i.test(photo);

        if (isVideo) {
            const monthVideo = document.getElementById("monthVideo");
            if (monthVideo) {
                if (monthVideo.paused && monthVideo.readyState >= 2) {
                    monthVideo.play().catch(() => {});
                }
                monthVideo.onended = () => {
                    nextMonthPhotoAuto();
                };
            }
        } else {
            monthTimer = setInterval(() => {
                nextMonthPhotoAuto();
            }, AUTO_SLIDE_TIME);
        }
    }

    function nextMonthPhotoAuto() {
        const photos = months[currentMonth].photos || [];
        if (!photos.length) return;

        currentMonthPhoto = (currentMonthPhoto + 1) % photos.length;
        renderMonthPhoto();
    }


    /* =========================================================
       RENDERIZAR FOTO/VIDEO ACTUAL DEL MES
    ========================================================= */

    function renderMonthPhoto() {
        stopMonthAuto();

        const month = months[currentMonth];
        const photos = month.photos || [];
        const total = photos.length;

        /* CREAR ELEMENTO VIDEO SI NO EXISTE */
        let monthVideo = document.getElementById("monthVideo");
        if (!monthVideo && monthPhoto && monthPhoto.parentElement) {
            monthVideo = document.createElement("video");
            monthVideo.id = "monthVideo";
            monthVideo.className = "month-video";
            monthVideo.muted = true;
            monthVideo.autoplay = true;
            monthVideo.playsInline = true;
            monthVideo.setAttribute("muted", "");
            monthVideo.setAttribute("playsinline", "");

            monthVideo.style.maxWidth = "100%";
            monthVideo.style.maxHeight = "100%";
            monthVideo.style.width = "auto";
            monthVideo.style.height = "auto";
            monthVideo.style.objectFit = "contain";
            monthVideo.style.margin = "auto";
            monthVideo.style.borderRadius = "10px";
            monthVideo.style.display = "none";

            monthPhoto.parentElement.appendChild(monthVideo);
        }

        if (monthDots) monthDots.innerHTML = "";

        if (total === 0) {
            if (monthPhoto) monthPhoto.style.display = "none";
            if (monthVideo) monthVideo.style.display = "none";
            if (monthPhotoPlaceholder) monthPhotoPlaceholder.style.display = "flex";
            if (monthPrev) monthPrev.style.display = "none";
            if (monthNext) monthNext.style.display = "none";
            if (monthPhotoCounter) monthPhotoCounter.textContent = "0 / 0";
            return;
        }

        if (currentMonthPhoto >= total) currentMonthPhoto = total - 1;
        if (currentMonthPhoto < 0) currentMonthPhoto = 0;

        const photo = photos[currentMonthPhoto];
        const isVideo = /\.(mp4|webm|ogg|mov|m4v)$/i.test(photo);

        /* SI ES VIDEO */
        if (isVideo) {
            if (monthPhoto) monthPhoto.style.display = "none";

            if (monthVideo) {
                monthVideo.style.display = "block";
                monthVideo.pause();
                monthVideo.removeAttribute("src");
                monthVideo.currentTime = 0;
                monthVideo.src = mediaUrl(photo);
                monthVideo.load();

                monthVideo.onloadedmetadata = () => {
                    const monthsScreen = document.getElementById("months");
                    if (monthsScreen && monthsScreen.classList.contains("active-screen")) {
                        monthVideo.play().catch(() => {});
                    }
                };
            }

        /* SI ES IMAGEN */
        } else {
            if (monthVideo) {
                monthVideo.pause();
                monthVideo.onended = null;
                monthVideo.removeAttribute("src");
                monthVideo.style.display = "none";
            }

            if (monthPhoto) {
                monthPhoto.style.display = "block";
                monthPhoto.classList.add("changing");
                monthPhoto.src = mediaUrl(photo);
                monthPhoto.alt = `${month.title} - foto ${currentMonthPhoto + 1}`;

                monthPhoto.onload = () => {
                    monthPhoto.classList.remove("changing");
                };
            }
        }

        if (monthPhotoPlaceholder) monthPhotoPlaceholder.style.display = "none";

        if (monthPrev) {
            monthPrev.style.display = "block";
            monthPrev.disabled = total <= 1;
        }

        if (monthNext) {
            monthNext.style.display = "block";
            monthNext.disabled = total <= 1;
        }

        if (monthPhotoCounter) {
            monthPhotoCounter.textContent = `${currentMonthPhoto + 1} / ${total}`;
        }

        if (monthDots && total <= 15) {
            photos.forEach((_, index) => {
                const dot = document.createElement("button");
                dot.type = "button";
                dot.className = "carousel-dot";
                if (index === currentMonthPhoto) dot.classList.add("active");
                dot.setAttribute("aria-label", `Ir a foto ${index + 1}`);

                dot.addEventListener("click", () => {
                    currentMonthPhoto = index;
                    renderMonthPhoto();
                });

                monthDots.appendChild(dot);
            });
        }

        startMonthAuto();
    }


    /* =========================================================
       BOTONES Y EVENTOS MESES
    ========================================================= */

    if (monthPrev) {
        monthPrev.addEventListener("click", () => {
            const photos = months[currentMonth].photos || [];
            if (!photos.length) return;
            currentMonthPhoto = (currentMonthPhoto - 1 + photos.length) % photos.length;
            renderMonthPhoto();
        });
    }

    if (monthNext) {
        monthNext.addEventListener("click", () => {
            nextMonthPhotoAuto();
        });
    }

    const monthCarousel = document.querySelector(".month-carousel");
    if (monthCarousel) {
        monthCarousel.addEventListener("mouseenter", () => stopMonthAuto());
        monthCarousel.addEventListener("mouseleave", () => startMonthAuto());

        let monthTouchStart = 0;
        monthCarousel.addEventListener("touchstart", event => {
            if (event.changedTouches.length) {
                monthTouchStart = event.changedTouches[0].screenX;
            }
        }, { passive: true });

        monthCarousel.addEventListener("touchend", event => {
            if (!event.changedTouches.length) return;
            const monthTouchEnd = event.changedTouches[0].screenX;
            const distance = monthTouchEnd - monthTouchStart;

            if (Math.abs(distance) < 50) return;

            if (distance < 0) {
                monthNext?.click();
            } else {
                monthPrev?.click();
            }
        }, { passive: true });
    }


    /* NAVEGACIÓN ENTRE MESES */

    if (monthPrevButton) {
        monthPrevButton.addEventListener("click", () => {
            if (currentMonth > 0) {
                loadMonth(currentMonth - 1);
            }
        });
    }

    if (monthNextButton) {
        monthNextButton.addEventListener("click", () => {
            if (currentMonth < months.length - 1) {
                loadMonth(currentMonth + 1);
            }
        });
    }

    if (enterRelationship) {
        enterRelationship.addEventListener("click", () => {
            currentMonth = 0;
            currentMonthPhoto = 0;
            showScreen("months");
            loadMonth(currentMonth);
        });
    }

    if (continueFinal) {
        continueFinal.addEventListener("click", () => {
            showScreen("final");
        });
    }

    if (finalHome) {
        finalHome.addEventListener("click", () => {
            showScreen("home");
        });
    }


    /* MÚSICA */

    let musicPlaying = false;
    if (musicToggle && backgroundMusic) {
        musicToggle.addEventListener("click", async () => {
            try {
                if (!musicPlaying) {
                    await backgroundMusic.play();
                    musicPlaying = true;
                    musicToggle.textContent = "música";
                } else {
                    backgroundMusic.pause();
                    musicPlaying = false;
                    musicToggle.textContent = "música";
                }
            } catch (error) {
                console.warn("No se pudo reproducir la música:", error);
            }
        });
    }

    if (musicTip) {
        setTimeout(() => {
            musicTip.classList.add("hidden");
        }, 6000);
    }


    /* TECLADO */

    document.addEventListener("keydown", event => {
        const monthsScreen = document.getElementById("months");
        if (!monthsScreen || !monthsScreen.classList.contains("active-screen")) return;

        if (event.key === "ArrowLeft") monthPrev?.click();
        if (event.key === "ArrowRight") monthNext?.click();
    });


    /* INICIALIZACIÓN */

    loadMonth(0);
    loadMonthPhotos();

});