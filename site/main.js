document.documentElement.classList.add("js");
(() => {
  const C = window.SOLENN;
  const wa = (text) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`;
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Enlaces generales de WhatsApp
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = wa(C.mensaje);
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Menú con pestañas
  const tabs = document.querySelector("[data-tabs]");
  const body = document.querySelector("[data-menu]");
  const row = ([name, desc, price]) => `
    <li>
      <a class="item" href="${wa(`Hola, me gustaría agendar: ${name}.`)}" target="_blank" rel="noopener">
        <span class="item__name">${esc(name)}</span>
        <span class="item__price">${esc(price)}</span>
        ${desc ? `<span class="item__desc">${esc(desc)}</span>` : ""}
        <span class="item__book" aria-hidden="true">Agendar →</span>
      </a>
    </li>`;

  tabs.innerHTML = C.menu.map((cat, i) => `
    <button type="button" role="tab" id="tab-${cat.id}" aria-controls="panel-${cat.id}"
      aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
      <span class="tab__n">0${i + 1}</span>${esc(cat.titulo)}
    </button>`).join("");
  tabs.setAttribute("role", "tablist");

  body.innerHTML = C.menu.map((cat, i) => `
    <div class="panel" role="tabpanel" id="panel-${cat.id}" aria-labelledby="tab-${cat.id}" ${i ? "hidden" : ""}>
      <h3 class="panel__title">${esc(cat.titulo).replace(" &amp; ", "<br>&amp; ")}</h3>
      <ul class="items">${cat.servicios.map(row).join("")}</ul>
    </div>`).join("");

  const buttons = [...tabs.querySelectorAll("button")];
  const select = (btn) => {
    buttons.forEach((b) => {
      const on = b === btn;
      b.setAttribute("aria-selected", on);
      b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
    });
  };
  buttons.forEach((b, i) => {
    b.addEventListener("click", () => select(b));
    b.addEventListener("keydown", (e) => {
      const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (!d) return;
      const next = buttons[(i + d + buttons.length) % buttons.length];
      select(next);
      next.focus();
    });
  });

  // Sets
  document.querySelector("[data-sets]").innerHTML = C.sets.map(([name, desc, price], i) => `
    <li class="reveal">
      <a class="set" href="${wa(`Hola, me gustaría agendar el ${name}.`)}" target="_blank" rel="noopener">
        <span class="set__n">0${i + 1}</span>
        <span class="set__name">${esc(name)}</span>
        <span class="set__desc">${esc(desc)}</span>
        <span class="set__price">${esc(price)}</span>
      </a>
    </li>`).join("");

  // Horario
  document.querySelector("[data-hours]").innerHTML = C.horario
    .map(([d, h]) => `<span class="hours"><span>${esc(d)}</span><span>${esc(h)}</span></span>`).join("");

  // Mapa: se carga solo al pedirlo (más rápido y sin rastreo de Google al entrar)
  const map = document.querySelector("[data-map]");
  map.querySelector("[data-map-load]").addEventListener("click", () => {
    map.innerHTML = `<iframe title="Mapa de Studio Solenn" referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps?q=Studio+Solenn,+Valpara%C3%ADso+2444,+Providencia,+Guadalajara&z=16&output=embed"></iframe>`;
  });

  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  // Navegación: fondo al hacer scroll
  const nav = document.querySelector("[data-nav]");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Aparición suave
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  items.forEach((el) => io.observe(el));
})();
