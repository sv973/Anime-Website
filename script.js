document.querySelectorAll(".dropdown-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".player-card");
    const isOpen = card.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
  });
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("mobile-open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("mobile-open"));
});
