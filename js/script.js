const IMG = {
  main:        "images/Pratos Principais/",
  traditional: "images/Pratos da terra/",
  sides:       "images/Guarnações/",
  cocktails:   "images/Cocktails/",
  drinks:      "images/bebidas/"
};

// Formato: [nome, caminho da imagem]. Use null se ainda não houver imagem.
const menuData = {
  mainDishes: [
    ["Bacalhau com natas",       IMG.main + "Bacalhau-com-Natas.webp"],
    ["Cozido de peixe",          IMG.main + "Cozido-de-Peixe.webp"],
    ["Choco panado com batatas", IMG.main + "choco_em_molho_com_batatas.jpg"],
    ["Arroz de pato",            IMG.main + "Arroz-de-Pato.webp"],
    ["Caldeirada de cabrito",    IMG.main + "Caldeirada de Cabrito.jpg"],
    ["Bifes de cogumelos e ovos", IMG.main + "Bifes de Cogumelos e Ovos.jpg"],
    ["Peito de frango com natas", IMG.main + "Peito de Frango com Natas.webp"],
    ["Lasanha à bolonhesa",      IMG.main + "Lasanha-a-bolonhesa-com-carne-moida.webp"],
    ["Caldeirada de marisco",    IMG.main + "Caldeirada de Marisco.jpg"],
    ["Cachupa",                  IMG.main + "Cachupa.webp"]
  ],
  traditionalDishes: [
    ["Cabidela",             IMG.traditional + "Cabidela.jpg"],
    ["Ginguinga de cabrito", IMG.traditional + "Ginguinga-de-Cabrito.jpg"],
    ["Peito Alto",           IMG.traditional + "Peito-Alto.JPG"],
    ["Bagre de muteta",      IMG.traditional + "Bagre-de-Muteta.webp"]
  ],
  sides: [
    ["Feijão preto",                    IMG.sides + "feijão-preto.webp"],
    ["Feijão de óleo de palma",         IMG.sides + "feijão-oleo-de-palma.webp"],
    ["Kizaca",                          IMG.sides + "kizaca.jpg"],
    ["Sakamadesso (kizaca com feijão)", IMG.sides + "sacamadesso.png"],
    ["Mengueleca",                      IMG.sides + "mengueleca.png"],
    ["Fumbua",                          IMG.sides + "fumbwa.jpg"],
    ["Macayabo com molho de brinjela",  IMG.sides + "Makayabu.webp"],
    ["Catato",                          IMG.sides + "catato.jpg"],
    ["Funge de bombo",                  IMG.sides + "funge-de-bombo.jpg"],
    ["Funge de milho",                  IMG.sides + "funge-de-milho.jpg"],
    ["Arroz branco",                    IMG.sides + "arroz-branco.jpg"],
    ["Banana pão / Batata doce / Mandioca fervida", IMG.sides + "banana-pão.jpg"],
    ["Batata frita / Banana frita / Mandioca frita", IMG.sides + "Batata-Frita.webp"],
    ["Churrasco",                       IMG.sides + "churrasco.jpg"],
    ["Salada fria completa",            IMG.sides + "Salada-Fria.webp"],
    ["Meiandungo",                      IMG.sides + "Meiandungo.avif"]
  ],
  cocktailsGrid: [
    ["Caipirinha",        IMG.cocktails + "caipirinha.jpg"],
    ["Lagoa Azul",        IMG.cocktails + "lagoa azul.jpg"],
    ["Piña Colada",       IMG.cocktails + "Piña Colada.jpg"],
    ["Mojito",            IMG.cocktails + "mogito.webp"],
    ["Love on the Beach", IMG.cocktails + "love on the beach.avif"],
    ["Gin Tónico",        IMG.cocktails + "Gin tonico.webp"]
  ],
  alcoholGrid: [
    ["Amarula",           IMG.drinks + "amarula.webp"],
    ["Champanhe",         IMG.drinks + "champanhe.webp"],
    ["Cuca",              IMG.drinks + "Cuca.webp"],
    ["Doppel",            IMG.drinks + "doppel.jpg"],
    ["Eka",               IMG.drinks + "eka.jpg"],
    ["Nocal",             IMG.drinks + "nocal.png"],
    ["Gin Gordon's",      IMG.drinks + "gin gordon.jpeg"],
    ["Smirnoff",          IMG.drinks + "smirnoff.jpg"],
    ["Vinho Gazela",      IMG.drinks + "vinho-gazela.jpg"],
    ["Monte da Ravasqueira Reserva (branco)", IMG.drinks + "vinho-monte-da-ravasqueira-reserva-vinho-branco.jpg"],
    ["Whisky Black Label", IMG.drinks + "whisky-black-label.jpg"],
    ["Whisky Red Label",   IMG.drinks + "whisky-red-label.jpg"],
    ["Whisky Jameson",     IMG.drinks + "whisky-jameson.webp"]
  ]
};

const naturalDrinks = ["Maracujá", "Ananás", "Múcua Mix", "Tropical"];

/* =====================================================
   CARDS
===================================================== */

function makeCard([name, image]) {
  const card = document.createElement("article");
  card.className = "menu-card";

  let media;
  if (image) {
    media = document.createElement("img");
    media.src = encodeURI(image);
    media.alt = name;
    media.loading = "lazy";
    media.className = "menu-image";
  } else {
    media = document.createElement("div");
    media.className = "menu-image menu-image--empty";
    media.setAttribute("role", "img");
    media.setAttribute("aria-label", name);
  }

  const info = document.createElement("div");
  info.className = "menu-info";

  const title = document.createElement("h3");
  title.textContent = name;

  info.appendChild(title);
  card.append(media, info);
  return card;
}

function renderCards(elementId, items) {
  const container = document.getElementById(elementId);
  if (!container) return;
  items.forEach(item => container.appendChild(makeCard(item)));
}

Object.entries(menuData).forEach(([id, items]) => renderCards(id, items));

/* =====================================================
   SUMOS NATURAIS
===================================================== */

const naturalContainer = document.getElementById("naturalDrinks");
if (naturalContainer) {
  naturalDrinks.forEach(name => {
    const span = document.createElement("span");
    span.textContent = name;
    naturalContainer.appendChild(span);
  });
}

/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* =====================================================
   ACTIVE NAV LINK (scroll spy)
===================================================== */

// A secção .hero não tem id; corresponde ao link "#inicio".
const sections = document.querySelectorAll(".hero, main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id || "inicio";
    navItems.forEach(item => item.classList.remove("active"));
    const active = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (active) active.classList.add("active");
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

/* =====================================================
   YEAR
===================================================== */

document.getElementById("year").textContent = new Date().getFullYear();