/* =========================================================
   MENU DE CASAMENTO
   Orlando Matumona & Mónica Matumona
========================================================= */


/* =========================================================
   DADOS DO MENU
========================================================= */

const menuData = {

    /* =====================================================
       PRATOS PRINCIPAIS
    ===================================================== */

    mainDishes: [

        {
            name: "Bacalhau com Natas",
            icon: "🐟",
            description: "Bacalhau cremoso preparado com natas."
        },

        {
            name: "Cozido de Peixe",
            icon: "🐟",
            description: "Peixe preparado com sabores tradicionais."
        },

        {
            name: "Choco Panado com Batatas",
            icon: "🦑",
            description: "Choco panado servido com batatas."
        },

        {
            name: "Arroz de Pato",
            icon: "🍗",
            description: "Arroz de pato preparado no forno."
        },

        {
            name: "Caldeirada de Cabrito",
            icon: "🍖",
            description: "Cabrito preparado à maneira tradicional."
        },

        {
            name: "Bifes de Cogumelos e Ovos",
            icon: "🥩",
            description: "Bifes acompanhados de cogumelos e ovos."
        },

        {
            name: "Peito de Frango com Natas",
            icon: "🍗",
            description: "Peito de frango com molho cremoso de natas."
        },

        {
            name: "Lasanha à Bolonhesa",
            icon: "🍝",
            description: "Lasanha clássica com molho à bolonhesa."
        },

        {
            name: "Caldeirada de Marisco",
            icon: "🦐",
            description: "Seleção de mariscos preparada em caldeirada."
        },

        {
            name: "Cachupa",
            icon: "🍲",
            description: "Prato tradicional preparado com sabores africanos."
        }

    ],


    /* =====================================================
       PRATOS TÍPICOS DA TERRA
    ===================================================== */

    traditionalDishes: [

        {
            name: "Cabidela",
            icon: "🍲",
            description: "Um clássico da gastronomia tradicional."
        },

        {
            name: "Ginguinga de Cabrito",
            icon: "🍖",
            description: "Preparação tradicional de cabrito."
        },

        {
            name: "Peito Alto",
            icon: "🥩",
            description: "Prato tradicional preparado com sabor autêntico."
        },

        {
            name: "Bagre de Muteta",
            icon: "🐟",
            description: "Peixe preparado à maneira tradicional."
        }

    ],


    /* =====================================================
       GUARNIÇÕES
    ===================================================== */

    sides: [

        {
            name: "Feijão Preto",
            icon: "🫘"
        },

        {
            name: "Feijão de Óleo de Palma",
            icon: "🫘"
        },

        {
            name: "Kizaca",
            icon: "🥬"
        },

        {
            name: "Sacamadesso",
            icon: "🥬",
            description: "Kizaca com feijão."
        },

        {
            name: "Mengueleca",
            icon: "🥗"
        },

        {
            name: "Fumbua",
            icon: "🌿"
        },

        {
            name: "Macayabo",
            icon: "🐟",
            description: "Com molho de brinjela."
        },

        {
            name: "Catato",
            icon: "🍽️"
        },

        {
            name: "Funge de Bombo",
            icon: "🥣"
        },

        {
            name: "Funge de Milho",
            icon: "🥣"
        },

        {
            name: "Arroz Branco",
            icon: "🍚"
        },

        {
            name: "Banana-Pão",
            icon: "🍌"
        },

        {
            name: "Batata Doce",
            icon: "🍠"
        },

        {
            name: "Mandioca Fervida",
            icon: "🥔"
        },

        {
            name: "Batata Frita",
            icon: "🍟"
        },

        {
            name: "Banana Frita",
            icon: "🍌"
        },

        {
            name: "Mandioca Frita",
            icon: "🥔"
        },

        {
            name: "Churrasco",
            icon: "🔥"
        },

        {
            name: "Salada Fria Completa",
            icon: "🥗"
        },

        {
            name: "Meiandungo",
            icon: "🍲"
        }

    ],


    /* =====================================================
       COCKTAILS
    ===================================================== */

    cocktails: [

        {
            name: "Caipirinha",
            icon: "🍋"
        },

        {
            name: "Lagoa Azul",
            icon: "🍸"
        },

        {
            name: "Piña Colada",
            icon: "🍍"
        },

        {
            name: "Mojito",
            icon: "🌿"
        },

        {
            name: "Love on the Beach",
            icon: "🍹"
        },

        {
            name: "Gin Tónico",
            icon: "🍸"
        }

    ],


    /* =====================================================
       SUMOS NATURAIS
    ===================================================== */

    naturalDrinks: [

        {
            name: "Maracujá",
            icon: "🥭"
        },

        {
            name: "Ananás",
            icon: "🍍"
        },

        {
            name: "Múcua Mix",
            icon: "🥤"
        },

        {
            name: "Tropical",
            icon: "🍹"
        }

    ],


    /* =====================================================
       BEBIDAS ALCOÓLICAS
    ===================================================== */

    alcohol: [

        {
            name: "Cerveja Cuca Lata",
            icon: "🍺"
        },

        {
            name: "Cerveja Nocal Lata",
            icon: "🍺"
        },

        {
            name: "Cerveja Eka Lata",
            icon: "🍺"
        },

        {
            name: "Cerveja Booster Lata",
            icon: "🍺"
        },

        {
            name: "Cerveja Doppel Lata",
            icon: "🍺"
        },

        {
            name: "Gin Gordon's",
            icon: "🍸",
            description: "Pack 24 × 330 ml."
        },

        {
            name: "Smirnoff Ice Lata Preta",
            icon: "🍾"
        },

        {
            name: "Energético Speed",
            icon: "🥤"
        },

        {
            name: "Sumol Lata",
            icon: "🥤"
        },

        {
            name: "Coca-Cola Lata",
            icon: "🥤"
        },

        {
            name: "Água Tónica",
            icon: "🥤"
        },

        {
            name: "Caixa de Champanhe 6GR",
            icon: "🥂"
        },

        {
            name: "Caixa de Amarula",
            icon: "🥃"
        },

        {
            name: "Whisky Black Label",
            icon: "🥃"
        },

        {
            name: "Whisky Jameson",
            icon: "🥃"
        },

        {
            name: "Whisky Red Label",
            icon: "🥃"
        },

        {
            name: "Vinho Monte da Ravasqueira",
            icon: "🍷"
        },

        {
            name: "Vinho Gazela",
            icon: "🍷"
        },

        {
            name: "Água Nboa",
            icon: "💧"
        }

    ]

};


/* =========================================================
   CRIAR CARDS DO MENU
========================================================= */

function renderCards(containerId, items) {

    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = "";

    items.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "menu-card";

        card.style.animationDelay = `${index * 0.05}s`;

        const description = item.description
            ? `<p>${item.description}</p>`
            : "";

        card.innerHTML = `

            <div class="menu-image">

                <span class="menu-emoji">
                    ${item.icon || "🍽️"}
                </span>

            </div>

            <div class="menu-info">

                <h3>
                    ${item.name}
                </h3>

                ${description}

            </div>

        `;

        container.appendChild(card);

    });

}


/* =========================================================
   CRIAR CARDS DOS SUMOS NATURAIS
========================================================= */

function renderNaturalDrinks() {

    const container =
        document.getElementById("naturalDrinks");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    menuData.naturalDrinks.forEach(
        (drink, index) => {

            const item =
                document.createElement("div");

            item.className =
                "natural-drink";

            item.style.animationDelay =
                `${index * 0.08}s`;

            item.innerHTML = `

                <span class="drink-icon">
                    ${drink.icon}
                </span>

                <h4>
                    ${drink.name}
                </h4>

            `;

            container.appendChild(item);

        }
    );

}


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /* Fechar o menu quando clicar num link */

    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   NAVEGAÇÃO ATIVA
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 160;

            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }
);


/* =========================================================
   ANO AUTOMÁTICO NO FOOTER
========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   ANIMAÇÃO AO ENTRAR NO ECRÃ
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderCards(
            "mainDishes",
            menuData.mainDishes
        );

        renderCards(
            "traditionalDishes",
            menuData.traditionalDishes
        );

        renderCards(
            "sides",
            menuData.sides
        );

        renderCards(
            "cocktailsGrid",
            menuData.cocktails
        );

        renderCards(
            "alcoholGrid",
            menuData.alcohol
        );

        renderNaturalDrinks();


        /* Observar os cards depois de criados */

        document
            .querySelectorAll(
                ".menu-card, .natural-drink"
            )
            .forEach(element => {

                observer.observe(element);

            });

    }
);