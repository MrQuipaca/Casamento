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
    ["Bacalhau com natas",       IMG.main + "Bacalhau-com-Natas.png"],
    ["Cozido de peixe",          IMG.main + "Cozido-de-Peixe.png"],
    ["Choco panado com batatas", IMG.main + "choco_em_molho_com_batatas.png"],
    ["Arroz de pato",            IMG.main + "Arroz-de-Pato.png"],
    ["Caldeirada de cabrito",    IMG.main + "Caldeirada de Cabrito.png"],
    ["Bifes de cogumelos e ovos", IMG.main + "Bifes de Cogumelos e Ovos.png"],
    ["Peito de frango com natas", IMG.main + "Peito de Frango com Natas.png"],
    ["Lasanha à bolonhesa",      IMG.main + "Lasanha-a-bolonhesa-com-carne-moida.png"],
    ["Caldeirada de marisco",    IMG.main + "Caldeirada de Marisco.png"],
    ["Cachupa",                  IMG.main + "Cachupa.png"]
  ],
  traditionalDishes: [
    ["Cabidela",             IMG.traditional + "Cabidela.png"],
    ["Ginguinga de cabrito", IMG.traditional + "Ginguinga-de-Cabrito.png"],
    ["Peito Alto",           IMG.traditional + "Peito-Alto.png"],
    ["Bagre de muteta",      IMG.traditional + "Bagre-de-Muteta.png"]
  ],
  sides: [
    ["Feijão preto",                    IMG.sides + "feijão-preto.png"],
    ["Feijão de óleo de palma",         IMG.sides + "feijão-oleo-de-palma.png"],
    ["Kizaca",                          IMG.sides + "kizaca.png"],
    ["Sakamadesso (kizaca com feijão)", IMG.sides + "sacamadesso.png"],
    ["Mengueleca",                      IMG.sides + "mengueleca.png"],
    ["Fumbua",                          IMG.sides + "fumbwa.png"],
    ["Macayabo com molho de brinjela",  IMG.sides + "Makayabu.png"],
    ["Catato",                          IMG.sides + "catato.png"],
    ["Funge de bombo",                  IMG.sides + "funge-de-bombo.png"],
    ["Funge de milho",                  IMG.sides + "funge-de-milho.png"],
    ["Arroz branco",                    IMG.sides + "arroz-branco.png"],
    ["Banana pão / Batata doce / Mandioca fervida", IMG.sides + "banana-pão.png"],
    ["Batata frita / Banana frita / Mandioca frita", IMG.sides + "Batata-Frita.png"],
    ["Churrasco",                       IMG.sides + "churrasco.png"],
    ["Salada fria completa",            IMG.sides + "Salada-Fria.png"],
    ["Meiandungo",                      IMG.sides + "Meiandungo.png"]
  ],
  cocktailsGrid: [
    ["Caipirinha",        IMG.cocktails + "caipirinha.png"],
    ["Lagoa Azul",        IMG.cocktails + "lagoa azul.png"],
    ["Piña Colada",       IMG.cocktails + "Piña Colada.png"],
    ["Mojito",            IMG.cocktails + "mogito.png"],
    ["Love on the Beach", IMG.cocktails + "love on the beach.png"],
    ["Gin Tónico",        IMG.cocktails + "Gin tonico.png"]
  ],
alcoholGrid: [
  ["Amarula",           IMG.drinks + "amarula.png"],
  ["Champanhe",         IMG.drinks + "champanhe.png"],
  ["Cuca",              IMG.drinks + "Cuca.png"],
  ["Doppel",            IMG.drinks + "doppel.png"],
  ["Eka",               IMG.drinks + "eka.png"],
  ["Nocal",             IMG.drinks + "nocal.png"],
  ["Gin Gordon's",      IMG.drinks + "gin gordon.png"],
  ["Smirnoff",          IMG.drinks + "smirnoff.png"],
  ["Vinho Gazela",      IMG.drinks + "vinho-gazela.png"],
  ["Monte da Ravasqueira Reserva (branco)", IMG.drinks + "vinho-monte-da-ravasqueira-reserva-vinho-branco.png"],
  ["Whisky Black Label", IMG.drinks + "whisky-black-label.png"],
  ["Whisky Red Label",   IMG.drinks + "whisky-red-label.png"],
  ["Whisky Jameson",     IMG.drinks + "whisky-jameson.png"]
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