
const menuData = {
  mainDishes: [
    ["Bacalhau com natas", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"],
    ["Cozido de peixe", "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=700&q=80"],
    ["Choco panado com batatas", "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80"],
    ["Arroz de pato", "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80"],
    ["Caldeirada de cabrito", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"],
    ["Bifes de cogumelos e ovos", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"],
    ["Peito de frango com natas", "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=700&q=80"],
    ["Lasanha à bolonhesa", "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=700&q=80"],
    ["Caldeirada de marisco", "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80"],
    ["Cachupa", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"]
  ],
  traditionalDishes: [
    ["Cabidela", "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"],
    ["Ginguinga de cabrito", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"],
    ["Peito Alto", "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80"],
    ["Bagre de muteta", "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80"]
  ],
  sides: [
    ["Feijão preto", "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80"],
    ["Feijão de óleo de palma", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"],
    ["Kizaca", "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"],
    ["Sakamadesso (kizaca com feijão)", "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"],
    ["Mengueleca", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"],
    ["Fumbua", "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"],
    ["Macayabo com molho de brinjela", "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80"],
    ["Catato", "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"],
    ["Funge de bombo", "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80"],
    ["Funge de milho", "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80"],
    ["Arroz branco", "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=700&q=80"],
    ["Banana pão / Batata doce / Mandioca fervida", "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"],
    ["Batata frita / Banana frita / Mandioca frita", "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80"],
    ["Churrasco", "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80"],
    ["Salada fria completa", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"],
    ["Meiandungo", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"]
  ],
  cocktailsGrid: [
    ["Caipirinha", "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=700&q=80"],
    ["Lagoa Azul", "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"],
    ["Piña Colada", "https://images.unsplash.com/photo-1609956043284-3f5c9d6a6c70?auto=format&fit=crop&w=700&q=80"],
    ["Mojito", "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80"],
    ["Love on the Beach", "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=700&q=80"],
    ["Gin Tónico", "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80"]
  ]
};

const naturalDrinks = ["Maracujá", "Ananás", "Múcua Mix", "Tropical"];
const selected = new Map();

function makeCard(item, type) {
  const [name, image] = item;
  const key = `${type}:${name}`;
  const card = document.createElement("article");
  card.className = "menu-card";
  card.dataset.key = key;
  card.innerHTML = `
    <img class="menu-image" src="${image}" alt="${name}" loading="lazy">
    <div class="menu-info">
      <h3>${name}</h3>
      <button class="select-btn" type="button" aria-pressed="false">Selecionar</button>
    </div>
  `;

  const button = card.querySelector(".select-btn");
  button.addEventListener("click", () => toggleSelection(key, name, card, button));
  return card;
}

function renderCards(elementId, items, type) {
  const container = document.getElementById(elementId);
  items.forEach(item => container.appendChild(makeCard(item, type)));
}

function toggleSelection(key, name, card, button) {
  if (selected.has(key)) {
    selected.delete(key);
    card.classList.remove("selected");
    button.textContent = "Selecionar";
    button.setAttribute("aria-pressed", "false");
  } else {
    selected.set(key, name);
    card.classList.add("selected");
    button.textContent = "Selecionado ✓";
    button.setAttribute("aria-pressed", "true");
  }
  updateSelection();
}

function updateSelection() {
  const count = document.getElementById("selectedCount");
  const list = document.getElementById("selectedList");
  count.textContent = selected.size;
  list.innerHTML = "";

  if (!selected.size) {
    list.innerHTML = '<p class="empty-selection">Ainda não selecionou nenhum item.</p>';
    return;
  }

  selected.forEach(name => {
    const item = document.createElement("span");
    item.className = "selected-item";
    item.textContent = name;
    list.appendChild(item);
  });
}

renderCards("mainDishes", menuData.mainDishes, "prato");
renderCards("traditionalDishes", menuData.traditionalDishes, "terra");
renderCards("sides", menuData.sides, "guarnicao");
renderCards("cocktailsGrid", menuData.cocktailsGrid, "cocktail");

const naturalContainer = document.getElementById("naturalDrinks");
naturalDrinks.forEach(name => {
  const span = document.createElement("span");
  span.textContent = name;
  naturalContainer.appendChild(span);
});

document.getElementById("addAlcoholBtn").addEventListener("click", () => {
  const key = "bebida:Bebidas alcoólicas";
  if (!selected.has(key)) selected.set(key, "Bebidas alcoólicas");
  updateSelection();
  document.getElementById("escolha").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("clearSelection").addEventListener("click", () => {
  selected.clear();
  document.querySelectorAll(".menu-card.selected").forEach(card => {
    card.classList.remove("selected");
    const button = card.querySelector(".select-btn");
    button.textContent = "Selecionar";
    button.setAttribute("aria-pressed", "false");
  });
  updateSelection();
});

document.getElementById("confirmForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const number = document.getElementById("guestNumber").value;
  const notes = document.getElementById("notes").value.trim();
  const message = document.getElementById("formMessage");

  if (!selected.size) {
    message.textContent = "Por favor, selecione pelo menos um item do menu.";
    return;
  }

  const chosen = [...selected.values()].join(", ");
  message.textContent = `Obrigado, ${name}! A sua escolha (${chosen}) foi registada para ${number} convidado(s).`;

  // Aqui poderá ser ligado posteriormente a WhatsApp, email, formulário ou base de dados.
  console.log({ nome: name, convidados: number, escolhas: [...selected.values()], observacoes: notes });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => item.classList.remove("active"));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));
document.getElementById("year").textContent = new Date().getFullYear();
