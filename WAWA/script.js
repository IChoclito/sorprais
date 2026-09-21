document.addEventListener("DOMContentLoaded", () => {

    console.log("🍅 Sorpraisss iniciado correctamente");


    /* =========================================
       CONFIGURACIÓN R2
    ========================================== */

const R2_BASE_URL =
    "https://pub-87e98aa71f684d1598882d2da16b74eb.r2.dev";

const R2_FOLDER = "FOTOS Y VIDIOS";

const R2_LIST_ENDPOINT = "https://sorprais.nicolearias875.workers.dev";

const AUTO_SLIDE_TIME = 3000;

/*
    Permite usar:

    1. Una ruta relativa de R2:
       "CAPITULO-0/foto01.jpeg"

    2. Una URL completa:
       "https://pub-87e98aa71f684d1598882d2da16b74eb.r2.dev/..."
*/
function mediaUrl(path) {
    if (!path) return "";

    // Si ya es una URL completa, la usamos directamente.
    if (/^https?:\/\//i.test(path)) {
        return path;
    }

    // Si es una ruta de R2, agregamos automáticamente
    // la carpeta "FOTOS Y VIDIOS".
    const cleanPath = [
        R2_FOLDER,
        ...path.split("/").filter(Boolean)
    ]
        .map(part => encodeURIComponent(part))
        .join("/");

    return `${R2_BASE_URL}/${cleanPath}`;
}

    /* =========================================
       ELEMENTOS
    ========================================== */

    const screens =
        document.querySelectorAll(".screen");

    const mainNav =
        document.getElementById("mainNav");

    const logoHome =
        document.getElementById("logoHome");

    const musicToggle =
        document.getElementById("musicToggle");

    const musicTip =
        document.getElementById("musicTip");

    const backgroundMusic =
        document.getElementById("backgroundMusic");


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
        document.getElementById("monthPhotoPlaceholder");

    const monthPhotoCounter =
        document.getElementById("monthPhotoCounter");

    const monthDots =
        document.getElementById("monthDots");

    const monthPrev =
        document.getElementById("monthPrev");

    const monthNext =
        document.getElementById("monthNext");

    const monthStory =
        document.getElementById("monthStory");

    const monthPrevButton =
        document.getElementById("monthPrevButton");

    const monthNextButton =
        document.getElementById("monthNextButton");

    const monthProgressFill =
        document.getElementById("monthProgressFill");

    const monthProgressText =
        document.getElementById("monthProgressText");

    const continueFinal =
        document.getElementById("continueFinal");


    /* FINAL */

    const finalHome =
        document.getElementById("finalHome");


    /* =========================================
       NAVEGACIÓN ENTRE PANTALLAS
    ========================================== */

    function showScreen(screenId) {

        screens.forEach(screen => {

            screen.classList.remove("active-screen");

        });

        const target =
            document.getElementById(screenId);

        if (!target) return;

        target.classList.add("active-screen");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        updateNavigation(screenId);

    }


    function updateNavigation(screenId) {

        if (screenId === "home") {

            mainNav.style.display = "flex";

        } else {

            mainNav.style.display = "flex";

        }

    }


    /* =========================================
       HOME → PRESENTACIÓN
    ========================================== */

    touchButton.addEventListener("click", () => {

        showScreen("presentation");

    });


    /* =========================================
       NO, NO JDS → CAPÍTULO 0
    ========================================== */

    noButton.addEventListener("click", () => {

        noButton.classList.add("clicked");

        setTimeout(() => {

            showScreen("origin");

        }, 250);

    });


    /* =========================================
       OK MAÑANA
    ========================================== */

    tomorrowButton.addEventListener("click", () => {

        showScreen("tomorrow");

    });


    tomorrowBack.addEventListener("click", () => {

        showScreen("presentation");

    });


    /* =========================================
       LOGO → HOME
    ========================================== */

    logoHome.addEventListener("click", () => {

        showScreen("home");

    });


    /* =========================================
       DATOS DEL CAPÍTULO 0
    ========================================== */

    /*
        AQUÍ VAS A PONER TUS ~140 FOTOS.

        NO NECESITAS HACERLO AHORA.

        Cada objeto representa un MOMENTO
        de la historia.

        Puedes tener:

        1 foto
        3 fotos
        8 fotos
        20 fotos
        etc.

        El carrusel se adapta automáticamente.
    */

   const originMoments = [
    {
        title: "Mr bean :v",
        date: "26 de septiembre de 2023",
        description: "Recuerdas como se llamaba el curso? jdjdsj. Eras delegado en ese entonces, yo no conocia a nadie, quise encajar con mi chiste del taper (nadie entendió la vibra) y el profesor te dijo que me agregaras al grupo, asi fue como intercambiamos números..",
        photos: []
    },

    {
        title: "hola y adiós",
        date: "2023–2024",
        description: "Quizás para ti no fue nada pero aquella navidad del 2023 andaba un poco deprimida. Y en eso.. suena tu notificación,.. todavia recuerdo que vi la pantalla extrañada por que era de las personas de las que menos me lo esperaba. Despues de todo hablabamos solo por el curso que arruinaba mi horario, me recordó a los viejitos que comparten el mensaje a todos sus contactos para tener suerte en todo el año jejejej Luego tbm cuando me saludaste por mi cumple un día despues ;v",
        photos: []
    },

    {
        title: "Ed fisica",
        date: "Inicios de septiembre",
        description: "Cuando me pediste de favor que te agregue al grupo (no había) y a partir de eso empezamos a hablar...",
        photos: []
    },

    {
        title: "Sticker ramdoms nyejjejek",
        date: "2024",
        description: "Dejamos de hablar solo de cursos, poco a poco nuestras conversaciones se llenaron de memes, chistes y muchos stickers de gatos. Recuerdas la foto de mi paloma comiendo palomitas? me dijiste todo seco que estabas ocupado y te dejé de hablar puajdjakdaskd",
        photos: []
    },

    {
        title: "SDCH",
        date: "2024",
        description: "Y llegaron los Sábados de Chismesito. Recuerdo que fue porque te estaba enviando un audio largo despues del trabajo, era madrugada y dijiste que todavia estabas despierto asi que no habria problema con que saliera una llamada, y estuvimos hablando y llegamos a tocar temas personales con mis reales 'preguntas para hacer amigos', preguntas que empezaban tranquilas y terminaban de madrugada hablando de cualquier cosa (recordé cuando hice un chiste y tu dormias al lado de tus hermanos que casi los despiertas xdd)",
        photos: []
    },

    {
        title: "Ayacucho",
        date: "Finales de septiembre – inicios de octubre",
        description: "Te fuiste a Ayacucho a trabajar durante una semana aprox. No tenias mucha señal, y yo seguía escribiéndote. En ese entonces no quería que lo vieras raro, solo me estaba acostumbrando a tu compañía. Ahí fue cuando me dijiste que me llevarías a visitar algun día..",
        photos: []
    },

    {
        title: "Cuando eramos fit",
        date: "2024",
        description: "Aquel entonces jugábamos vóley, básquet, fútbol con tus compañeros, corríamos alrededor de la cancha. Y casi siempre llegabamos tarde a nuestras casas, bueno en tu caso peor, aunque era divertido. Recuerdas las veces que jugabamos derribadas? llegaban los mosquitos y yo siempre me ponia vic, cuando te pasé limón por el brazo.. y cuando jugamos tanto a derribarnos que al día siguiente estabamos muertos? jdjdjds recuerdo que ese jueves tenía prácticas y no podía ni moverme, pero apenas nos encontramos nos pusimos a jugar así hechos mrd jjasja ",
        photos: []
    },

    {
        title: "Salidas espontáneas",
        date: "2024",
        description: "Cuando fuimos el cementerio de animales con un choco de HH y un trago dulce (donde me maree xdd), hicimos una torre de piedritas tbm y que casi nos muerde un perro. Luego cuando terminamos viajando a Matucana, como pasó no sabemos, simplemente ocurrieron y que terminé disfrutando mucho.",
        photos: []
    },

    {
        title: "Esa noche..",
        date: "2024",
        description: "Empezamos en la cancha de la universidad jugando y molestándonos, pero terminamos hablando de cosas mucho más personales. Sentí que el tiempo se detuvo. Solo éramos tú y yo, intentando bailar una especie de salsa-vals, y hubo un momento en que estuvimos tan cerca que no supe qué hacer. Nunca había experimentado algo así con nadie y, sobre todo, no quería sobrepensarlo. Perdimos tanto la noción del tiempo que ni nos dimos cuenta de que ya eran casi las 11pm. Eso último no salió tan bien porque los de seguridad terminaron acompañándonos hasta el paradero jdjd Pero me encanta recordar ese día. Esa mezcla de confusión, fragilidad y afecto me reveló aquello a lo que tanto le tenía miedo, pero que al mismo tiempo me hizo sentir tan viva",
        photos: []
    },

    {
        title: "Vacaciones y distancia",
        date: "Enero – inicios de abril de 2025",
        description: "Llegaron las vacas y chalemente ya no podíamos vernos con la misma facilidad. Ambos vivíamos lejos además de que trabajabamos, así que muchas veces teníamos que encontrarnos en Centro de Lima. Aun así, seguimos hablando y viéndonos aproximadamente una vez al mes (aveces 2 :v). Tbm estaban esos audios de más de 30 minutos que, de alguna manera, siempre eras capaz de escucharlas. En enero cuando nos besamos jeje. Fue extraño, no hablamos mucho de eso, pero desde ese momento ya no podíamos fingir que no sabíamos",
        photos: []
    },

    {
        title: "Qué somos?",
        date: "2025",
        description: "Después de todo lo que había pasado, cada vez era más difícil hacer como si entre nosotros no hubiera algo. Seguíamos saliendo y hablando, mientras los dos sabíamos lo que sentíamos. En aquel entonces empecé a abrumarme, temía que al final estoy arriesgandome a que seamos unos casi algo y nada más. Pero igual seguí esperandote, hasta que te sintieras listo",
        photos: []
    },

    {
        title: "Antioquía",
        date: "Agosto de 2025",
        description: "Querías invitarme a viajar a Antioquía. Yo recuerdo haber desanimando el plan. Lo que no sabía era que tenías pensado aprovechar ese viaje para decirme lo que sentías y preguntarme si quería estar contigo. Había arruinado la sorpresa :C ...",
        photos: []
    },

    {
        title: "Cumpleversario",
        date: "septiembre de 2025",
        description: "Estuvimos planeando a donde es que iriamos por tu cumpleaños y dijimos normal Ichoca, investigamos nos preparamos y nos fuimos. A mitad de camino nos dimos cuenta que habia otros distritos buenos qué visitar asi que sin pensarlo más nos bajamos en el distrito de Surco (nos arrepentimos ahi nomás) estábamos perdidos, pero decidimos darle una oportunidad. Terca yo que quise ir a la catarata más lejana y pensar que lo hariamos en menos tiempo jdjj... y asi nos fuimos a Pala Cala con la ayuda de perejil. El camino fue tan largo que ya pareciamos cencistas pero valio la pena, jeje una lástima haber llegado tarde que el sol hasta se habia ido así que ya decidimos no meternos. La caminata de regreso fue otra cosa, nos agarro la noche y todo pero lo logramos. Tuvimos que dejar a perejil pero fue un buen guía, lo compensamos con comidita antes de que decida mordernos a uno de los 2 xdd. Luego llegó tu cumpleaños y de paso el cumpleaños de la hijita de tu compañera. Antes de salir, me diste un pequeño regalito y finalmente lograste decirme lo que teniamos pendiente de Antioquía (aunque hubiese querido que fuera mas cursi)",
        photos: []
    }
];


    /* =========================================
       SISTEMA DE CARRUSELES
       CAPÍTULO 0
    ========================================== */

    const originCarouselStates = {};


    function createOriginCarousel(moment, index) {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "story-carousel";

        wrapper.innerHTML = `

            <div class="story-image-wrapper">

                <img
                    class="story-image"
                    alt=""
                    loading="lazy"
                >

                <div class="story-placeholder">

                    <span>📷</span>

                    <p>
                        Aquí irán las fotos de este momento
                    </p>

                </div>

            </div>

            <button
                class="story-carousel-arrow story-carousel-prev"
                aria-label="Foto anterior"
            >
                ‹
            </button>

            <button
                class="story-carousel-arrow story-carousel-next"
                aria-label="Foto siguiente"
            >
                ›
            </button>

            <div class="story-counter">
                0 / 0
            </div>

            <div class="story-dots"></div>

        `;


        const image =
            wrapper.querySelector(".story-image");

        const placeholder =
            wrapper.querySelector(".story-placeholder");

        const prev =
            wrapper.querySelector(".story-carousel-prev");

        const next =
            wrapper.querySelector(".story-carousel-next");

        const counter =
            wrapper.querySelector(".story-counter");

        const dots =
            wrapper.querySelector(".story-dots");


        const photos =
            moment.photos || [];


        const state = {
            index: 0,
            photos: photos
        };


        originCarouselStates[index] = state;


        function render() {

            const total =
                state.photos.length;


            if (total === 0) {

                image.style.display = "none";

                placeholder.style.display = "flex";

                prev.style.display = "none";

                next.style.display = "none";

                counter.style.display = "none";

                dots.innerHTML = "";

                return;

            }


            if (state.index >= total) {
                state.index = total - 1;
            }


            if (state.index < 0) {
                state.index = 0;
            }


            const photo =
                state.photos[state.index];


            image.style.display = "block";

            placeholder.style.display = "none";


            image.classList.add("changing");


            setTimeout(() => {

                image.src = mediaUrl(photo);

                image.alt =
                    `${moment.title} - foto ${state.index + 1}`;

                image.onload = () => {

                    image.classList.remove("changing");

                };

            }, 120);


            counter.textContent =
                `${state.index + 1} / ${total}`;


            prev.disabled =
                state.index === 0;

            next.disabled =
                state.index === total - 1;


            dots.innerHTML = "";


            /*
                Si hay muchas fotos,
                no mostramos 140 puntitos.
                Mostramos máximo 15.
            */

            const maxDots = 15;

            if (total <= maxDots) {

                state.photos.forEach((_, photoIndex) => {

                    const dot =
                        document.createElement("button");

                    dot.className =
                        "story-dot";

                    if (photoIndex === state.index) {

                        dot.classList.add("active");

                    }

                    dot.addEventListener("click", () => {

                        state.index = photoIndex;

                        render();

                    });

                    dots.appendChild(dot);

                });

            }

        }


        prev.addEventListener("click", () => {

            if (state.index > 0) {

                state.index--;

                render();

            }

        });


        next.addEventListener("click", () => {

            if (state.index < state.photos.length - 1) {

                state.index++;

                render();

            }

        });


        let startX = 0;

        let endX = 0;


        wrapper.addEventListener(
            "touchstart",
            event => {

                startX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        wrapper.addEventListener(
            "touchend",
            event => {

                endX =
                    event.changedTouches[0].screenX;

                const distance =
                    endX - startX;


                if (Math.abs(distance) < 50) {
                    return;
                }


                if (distance < 0) {

                    next.click();

                } else {

                    prev.click();

                }

            },
            { passive: true }
        );


        render();


        return wrapper;

    }


    /* =========================================
       RENDERIZAR CAPÍTULO 0
    ========================================== */

    function renderOriginTimeline() {

        originTimeline.innerHTML = "";


        originMoments.forEach((moment, index) => {

            const item =
                document.createElement("article");

            item.className =
                "origin-item";


            const card =
                document.createElement("div");

            card.className =
                "origin-card";


            card.innerHTML = `

                <span class="chapter-label">
                    ${moment.date}
                </span>

                <h3>
                    ${moment.title}
                </h3>

                <p>
                    ${moment.description}
                </p>

            `;


            const carousel =
                createOriginCarousel(
                    moment,
                    index
                );


            card.appendChild(carousel);

            item.appendChild(card);

            originTimeline.appendChild(item);

        });

    }


    renderOriginTimeline();
    loadOriginPhotos();


    /* =========================================
       CAPÍTULO 0 → MESES
    ========================================== */

    enterRelationship.addEventListener("click", () => {

        currentMonth = 0;

        currentMonthPhoto = 0;

        showScreen("months");

        loadMonth(currentMonth);

    });


    /* =========================================
       DATOS DE LOS 12 MESES
    ========================================== */

    /*
        AQUÍ ES DONDE POSTERIORMENTE
        VAMOS A COLOCAR LAS FOTOS DE
        CADA MES.

        POR AHORA PUEDEN QUEDAR VACÍOS.

        Cada mes puede tener cualquier
        cantidad de fotos.
    */

    const months = [

        {
            number: "MES 01",

            title: "Octubre 2025",

            date: "Nuestro primer mes",

            description:
                "Aquí irá la historia de nuestro primer mes oficialmente juntos.",

            photos: []

            /*
                Ejemplo futuro:

                photos: [
                    "MES-01/foto01.jpeg",
                    "MES-01/foto02.jpeg",
                    "MES-01/foto03.jpeg"
                ]
            */
        },


        {
            number: "MES 02",

            title: "Noviembre 2025",

            date: "Segundo mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 03",

            title: "Diciembre 2025",

            date: "Tercer mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 04",

            title: "Enero 2026",

            date: "Cuarto mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 05",

            title: "Febrero 2026",

            date: "Quinto mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 06",

            title: "Marzo 2026",

            date: "Sexto mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 07",

            title: "Abril 2026",

            date: "Séptimo mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 08",

            title: "Mayo 2026",

            date: "Octavo mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 09",

            title: "Junio 2026",

            date: "Noveno mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 10",

            title: "Julio 2026",

            date: "Décimo mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 11",

            title: "Agosto 2026",

            date: "Undécimo mes",

            description:
                "Aquí irá lo que vivimos durante este mes.",

            photos: []

        },


        {
            number: "MES 12",

            title: "Septiembre 2026",

            date: "Un año juntos",

            description:
                "Y llegamos al mes 12. Aquí irá la historia que cierre este primer año juntos.",

            photos: []

        }

    ];


    /* =========================================
       ESTADO DE MESES
    ========================================== */

    let currentMonth = 0;

    let currentMonthPhoto = 0;


    /* =========================================
       CARGAR MES
    ========================================== */

    function loadMonth(index) {

        if (
            index < 0 ||
            index >= months.length
        ) {
            return;
        }


        currentMonth = index;

        currentMonthPhoto = 0;


        const month =
            months[currentMonth];


        monthNumber.textContent =
            month.number;


        monthTitle.textContent =
            month.title;


        monthDate.textContent =
            month.date;


        monthStory.textContent =
            month.description;


        monthProgressText.textContent =
            `${currentMonth + 1} / ${months.length}`;


        const progress =
            ((currentMonth + 1) / months.length) * 100;


        monthProgressFill.style.width =
            `${progress}%`;


        monthPrevButton.disabled =
            currentMonth === 0;


        monthNextButton.disabled =
            currentMonth === months.length - 1;


        continueFinal.style.display =
            currentMonth === months.length - 1
                ? "block"
                : "none";


        renderMonthPhoto();

    }


    /* =========================================
       CARRUSEL DEL MES
    ========================================== */

    function renderMonthPhoto() {

        const month =
            months[currentMonth];

        const photos =
            month.photos || [];

        const total =
            photos.length;


        monthDots.innerHTML = "";


        /*
            SIN FOTOS
        */

        if (total === 0) {

            monthPhoto.style.display =
                "none";

            monthPhotoPlaceholder.style.display =
                "flex";

            monthPrev.style.display =
                "none";

            monthNext.style.display =
                "none";

            monthPhotoCounter.textContent =
                "0 / 0";

            return;

        }


        /*
            CON FOTOS
        */

        monthPhoto.style.display =
            "block";

        monthPhotoPlaceholder.style.display =
            "none";

        monthPrev.style.display =
            "block";

        monthNext.style.display =
            "block";


        if (currentMonthPhoto >= total) {

            currentMonthPhoto =
                total - 1;

        }


        if (currentMonthPhoto < 0) {

            currentMonthPhoto = 0;

        }


        const photo =
            photos[currentMonthPhoto];


        monthPhoto.classList.add("changing");


        setTimeout(() => {

            monthPhoto.src =
                mediaUrl(photo);

            monthPhoto.alt =
                `${month.title} - foto ${currentMonthPhoto + 1}`;

            monthPhoto.onload = () => {

                monthPhoto.classList.remove("changing");

            };

        }, 120);


        monthPhotoCounter.textContent =
            `${currentMonthPhoto + 1} / ${total}`;


        monthPrev.disabled =
            currentMonthPhoto === 0;


        monthNext.disabled =
            currentMonthPhoto === total - 1;


        /*
            PUNTOS
        */

        const maxDots = 15;


        if (total <= maxDots) {

            photos.forEach((_, index) => {

                const dot =
                    document.createElement("button");

                dot.className =
                    "carousel-dot";


                if (index === currentMonthPhoto) {

                    dot.classList.add("active");

                }


                dot.setAttribute(
                    "aria-label",
                    `Ir a foto ${index + 1}`
                );


                dot.addEventListener("click", () => {

                    currentMonthPhoto =
                        index;

                    renderMonthPhoto();

                });


                monthDots.appendChild(dot);

            });

        }

    }


    /* =========================================
       FOTO ANTERIOR
    ========================================== */

    monthPrev.addEventListener("click", () => {

        if (currentMonthPhoto > 0) {

            currentMonthPhoto--;

            renderMonthPhoto();

        }

    });


    /* =========================================
       FOTO SIGUIENTE
    ========================================== */

    monthNext.addEventListener("click", () => {

        const photos =
            months[currentMonth].photos || [];


        if (
            currentMonthPhoto <
            photos.length - 1
        ) {

            currentMonthPhoto++;

            renderMonthPhoto();

        }

    });


    /* =========================================
       SWIPE EN CARRUSEL DE MESES
    ========================================== */

    let monthTouchStart = 0;

    let monthTouchEnd = 0;


    const monthCarousel =
        document.querySelector(".month-carousel");


    monthCarousel.addEventListener(
        "touchstart",
        event => {

            monthTouchStart =
                event.changedTouches[0].screenX;

        },
        { passive: true }
    );


    monthCarousel.addEventListener(
        "touchend",
        event => {

            monthTouchEnd =
                event.changedTouches[0].screenX;


            const distance =
                monthTouchEnd -
                monthTouchStart;


            if (Math.abs(distance) < 50) {
                return;
            }


            if (distance < 0) {

                monthNext.click();

            } else {

                monthPrev.click();

            }

        },
        { passive: true }
    );


    /* =========================================
       MES ANTERIOR
    ========================================== */

    monthPrevButton.addEventListener(
        "click",
        () => {

            if (currentMonth > 0) {

                loadMonth(
                    currentMonth - 1
                );

            }

        }
    );


    /* =========================================
       MES SIGUIENTE
    ========================================== */

    monthNextButton.addEventListener(
        "click",
        () => {

            if (
                currentMonth <
                months.length - 1
            ) {

                loadMonth(
                    currentMonth + 1
                );

            }

        }
    );


    /* =========================================
       MES 12 → FINAL
    ========================================== */

    continueFinal.addEventListener(
        "click",
        () => {

            showScreen("final");

        }
    );


    /* =========================================
       FINAL → HOME
    ========================================== */

    finalHome.addEventListener(
        "click",
        () => {

            showScreen("home");

        }
    );


    /* =========================================
       MÚSICA
    ========================================== */

    let musicPlaying = false;


    musicToggle.addEventListener(
        "click",
        async () => {

            try {

                if (!musicPlaying) {

                    await backgroundMusic.play();

                    musicPlaying = true;

                    musicToggle.textContent =
                        "⏸ Música";

                } else {

                    backgroundMusic.pause();

                    musicPlaying = false;

                    musicToggle.textContent =
                        "▶ Música";

                }

            } catch (error) {

                console.warn(
                    "No se pudo reproducir la música:",
                    error
                );

            }

        }
    );


    /* =========================================
       OCULTAR AVISO DE MÚSICA
    ========================================== */

    setTimeout(() => {

        musicTip.classList.add("hidden");

    }, 6000);


    /* =========================================
       TECLADO
    ========================================== */

    document.addEventListener(
        "keydown",
        event => {

            const monthsVisible =
                document
                    .getElementById("months")
                    .classList
                    .contains("active-screen");


            if (!monthsVisible) {
                return;
            }


            if (event.key === "ArrowLeft") {

                monthPrev.click();

            }


            if (event.key === "ArrowRight") {

                monthNext.click();

            }

        }
    );


    /* =========================================
       INICIALIZAR
    ========================================== */

    loadMonth(0);

});

// ============================================================
// SORPRAISSS
// JavaScript principal
// ============================================================


// ============================================================
// CONFIGURACIÓN DE CLOUDFLARE R2
// ============================================================

const R2_BASE_URL =
    "https://pub-87e98aa71f684d1598882d2da16b74eb.r2.dev";

const R2_FOLDER = "FOTOS Y VIDIOS";

// IMPORTANTE:
// Aquí colocaremos posteriormente la URL real del Worker.
// Ejemplo:
// https://sorpraisss-r2-list.tuusuario.workers.dev
const R2_LIST_ENDPOINT =
    "https://TU-WORKER.workers.dev";

// Tiempo entre fotografías del carrusel
const AUTO_SLIDE_TIME = 3000;


// ============================================================
// UTILIDADES PARA R2
// ============================================================

function mediaUrl(path) {
    if (!path) return "";

    // Si ya es una URL completa, la usamos directamente.
    if (
        path.startsWith("http://") ||
        path.startsWith("https://")
    ) {
        return path;
    }

    // Si el path todavía no contiene la carpeta principal,
    // la agregamos.
    let cleanPath = path.replace(/^\/+/, "");

    if (!cleanPath.startsWith(`${R2_FOLDER}/`)) {
        cleanPath = `${R2_FOLDER}/${cleanPath}`;
    }

    // encodeURI conserva / pero codifica espacios,
    // tildes y otros caracteres necesarios para la URL.
    return `${R2_BASE_URL}/${encodeURI(cleanPath)}`;
}


// ============================================================
// OBTENER IMÁGENES AUTOMÁTICAMENTE DESDE R2
// ============================================================

async function getR2Images(folder) {
    if (!folder) return [];

    const prefix = `${R2_FOLDER}/${folder}/`;

    const url =
        `${R2_LIST_ENDPOINT}?prefix=${encodeURIComponent(prefix)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(
            `Error al consultar R2: ${response.status}`
        );
    }

    const data = await response.json();

    if (!data || !Array.isArray(data.objects)) {
        return [];
    }

    const imageExtensions =
        /\.(jpg|jpeg|png|webp|gif|avif)$/i;

    return data.objects
        .map(object => object.key)
        .filter(key => imageExtensions.test(key))
        .map(key => key.replace(`${R2_FOLDER}/`, ""));
}


// ============================================================
// DATOS DE "CÓMO EMPEZÓ TODO"
// ============================================================

const originMoments = [
    {
        title: "El día que nos conocimos",
        date: "26/09/2023",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Mr bean :v",
        photos: []
    },

    {
        title: "Los primeros mensajes",
        date: "2023 - 2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/hola y adiós",
        photos: []
    },

    {
        title: "Educación Física",
        date: "Septiembre 2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Ed fisica",
        photos: []
    },

    {
        title: "De los estudios a cualquier cosa",
        date: "2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Sticker ramdoms nyejjejek",
        photos: []
    },

    {
        title: "Sábado de Chismesito",
        date: "2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/SDCH",
        photos: []
    },

    {
        title: "Ayacucho",
        date: "Finales de septiembre - inicios de octubre 2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Ayacucho",
        photos: []
    },

    {
        title: "Cuando éramos fit",
        date: "2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Cuando eramos fit",
        photos: []
    },

    {
        title: "Salidas espontáneas",
        date: "2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Salidas espontáneas",
        photos: []
    },

    {
        title: "Una noche demasiado larga",
        date: "2024",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Esa noche",
        photos: []
    },

    {
        title: "Vacaciones y distancia",
        date: "Enero - abril 2025",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Vacaciones y distancia",
        photos: []
    },

    {
        title: "Qué somos?",
        date: "2025",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Qué somos?",
        photos: []
    },

    {
        title: "Antioquía",
        date: "Agosto 2025",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Antioquía",
        photos: []
    },

    {
        title: "Cumpleversario",
        date: "26 de septiembre de 2025",
        description: `
            Aquí va exactamente tu texto original.
        `,
        folder: "ANTES DE/Cumpleversario",
        photos: []
    }
];

// ============================================================
// ESTADOS DE LOS CARRUSELES
// ============================================================

const originCarouselStates = [];


// ============================================================
// CREAR CARRUSEL DE "CÓMO EMPEZÓ TODO"
// ============================================================

function createOriginCarousel(moment, momentIndex) {

    const wrapper = document.createElement("div");
    wrapper.className = "origin-carousel";

    const viewport = document.createElement("div");
    viewport.className = "origin-carousel-viewport";

    const image = document.createElement("img");
    image.className = "origin-carousel-image";
    image.alt = moment.title || "Foto";

    viewport.appendChild(image);

    const previousButton = document.createElement("button");
    previousButton.type = "button";
    previousButton.className =
        "origin-carousel-arrow origin-carousel-prev";
    previousButton.textContent = "‹";
    previousButton.setAttribute(
        "aria-label",
        "Foto anterior"
    );

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className =
        "origin-carousel-arrow origin-carousel-next";
    nextButton.textContent = "›";
    nextButton.setAttribute(
        "aria-label",
        "Foto siguiente"
    );

    const dots = document.createElement("div");
    dots.className = "origin-carousel-dots";

    wrapper.appendChild(previousButton);
    wrapper.appendChild(viewport);
    wrapper.appendChild(nextButton);
    wrapper.appendChild(dots);


    const state = {
        photos: Array.isArray(moment.photos)
            ? [...moment.photos]
            : [],

        index: 0,

        interval: null,

        render() {

            dots.innerHTML = "";

            if (!state.photos.length) {

                image.removeAttribute("src");
                image.alt = "No hay fotos todavía";

                wrapper.classList.add(
                    "origin-carousel-empty"
                );

                return;
            }

            wrapper.classList.remove(
                "origin-carousel-empty"
            );

            const currentPhoto =
                state.photos[state.index];

            image.src = mediaUrl(currentPhoto);

            image.alt =
                `${moment.title} - foto ${state.index + 1}`;

            state.renderDots();
        },


        renderDots() {

            dots.innerHTML = "";

            state.photos.forEach((_, index) => {

                const dot =
                    document.createElement("button");

                dot.type = "button";

                dot.className =
                    "origin-carousel-dot";

                if (index === state.index) {
                    dot.classList.add("active");
                }

                dot.setAttribute(
                    "aria-label",
                    `Ir a la foto ${index + 1}`
                );

                dot.addEventListener(
                    "click",
                    () => {

                        state.index = index;

                        state.render();

                        state.restartAuto();
                    }
                );

                dots.appendChild(dot);
            });
        },


        next() {

            if (!state.photos.length) return;

            state.index =
                (state.index + 1) %
                state.photos.length;

            state.render();
        },


        previous() {

            if (!state.photos.length) return;

            state.index =
                (
                    state.index -
                    1 +
                    state.photos.length
                ) %
                state.photos.length;

            state.render();
        },


        startAuto() {

            state.stopAuto();

            if (state.photos.length <= 1) {
                return;
            }

            state.interval =
                setInterval(() => {

                    state.next();

                }, AUTO_SLIDE_TIME);
        },


        stopAuto() {

            if (state.interval) {

                clearInterval(
                    state.interval
                );

                state.interval = null;
            }
        },


        restartAuto() {

            state.startAuto();
        }
    };


    // ========================================================
    // BOTONES
    // ========================================================

    previousButton.addEventListener(
        "click",
        () => {

            state.previous();

            state.restartAuto();
        }
    );


    nextButton.addEventListener(
        "click",
        () => {

            state.next();

            state.restartAuto();
        }
    );


    // ========================================================
    // PAUSAR CUANDO EL CURSOR ESTÁ ENCIMA
    // ========================================================

    wrapper.addEventListener(
        "mouseenter",
        () => {
            state.stopAuto();
        }
    );


    wrapper.addEventListener(
        "mouseleave",
        () => {
            state.startAuto();
        }
    );


    // ========================================================
    // SWIPE PARA CELULAR
    // ========================================================

    let touchStartX = 0;
    let touchEndX = 0;


    viewport.addEventListener(
        "touchstart",
        event => {

            if (!event.touches.length) {
                return;
            }

            touchStartX =
                event.touches[0].clientX;
        },
        {
            passive: true
        }
    );


    viewport.addEventListener(
        "touchend",
        event => {

            if (!event.changedTouches.length) {
                return;
            }

            touchEndX =
                event.changedTouches[0].clientX;

            const difference =
                touchStartX - touchEndX;

            const minimumSwipe = 40;

            if (
                Math.abs(difference) <
                minimumSwipe
            ) {
                return;
            }

            if (difference > 0) {
                state.next();
            } else {
                state.previous();
            }

            state.restartAuto();
        },
        {
            passive: true
        }
    );


    // ========================================================
    // PRELOAD DE IMÁGENES
    // ========================================================

    function preloadImages() {

        state.photos.forEach(
            photo => {

                const preload =
                    new Image();

                preload.src =
                    mediaUrl(photo);
            }
        );
    }


    // ========================================================
    // INICIALIZACIÓN
    // ========================================================

    state.render();

    preloadImages();

    state.startAuto();


    originCarouselStates[momentIndex] =
        state;


    return wrapper;
}

// ============================================================
// CARGAR FOTOS DE TODOS LOS MOMENTOS
// ============================================================

async function loadOriginPhotos() {

    await Promise.all(

        originMoments.map(
            async (moment, index) => {

                if (!moment.folder) {
                    return;
                }

                try {

                    const photos =
                        await getR2Images(
                            moment.folder
                        );


                    const state =
                        originCarouselStates[index];


                    if (!state) {
                        return;
                    }


                    state.photos =
                        photos;


                    state.index = 0;


                    state.render();


                    state.startAuto();


                    console.log(
                        `${moment.title}: ${photos.length} fotos encontradas`
                    );

                } catch (error) {

                    console.error(
                        `Error cargando ${moment.folder}:`,
                        error
                    );
                }
            }
        )
    );
}

