// Portfólio — Davi Afonso da Silva

// Menu mobile
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.getElementById("menu-mobile");
const linksMobile = document.querySelectorAll(".nav-mobile__link");

function fecharMenu() {
  navToggle.classList.remove("is-open");
  navMobile.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Abrir menu");
}

navToggle.addEventListener("click", () => {
  const aberto = navMobile.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", aberto);
  navToggle.setAttribute("aria-expanded", String(aberto));
  navToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

linksMobile.forEach((link) => link.addEventListener("click", fecharMenu));

// Fecha o menu ao redimensionar para a versão desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 640) fecharMenu();
});

// Header com sombra ao rolar
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.35)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Ano automático no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Aparecer seções suavemente ao rolar
const atualizar = () => {
  const elementos = document.querySelectorAll(".sobre, .card, .projeto, .contato__card");
  const emersor = () => {
    elementos.forEach((el) => {
      const posicao = el.getBoundingClientRect().top;
      const alturaTela = window.innerHeight;
      if (posicao < alturaTela - 80) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  elementos.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  emersor();
  window.addEventListener("scroll", emersor);
};

window.addEventListener("load", atualizar);