const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalInfo = document.getElementById("modalInfo");

document.querySelectorAll(".profile-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modalName.textContent = btn.dataset.name;
    modalInfo.textContent = btn.dataset.info;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal(){
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

const jutsuData = {
  rasengan: ["RASENGAN","A concentrated sphere of rotating chakra. The technique requires precise control and has become one of Naruto's defining techniques."],
  chidori: ["CHIDORI","A high-speed lightning technique that concentrates electrical chakra into the hand. Kakashi and Sasuke are especially associated with it."],
  shadow: ["SHADOW CLONE","A ninjutsu that creates physical copies of the user. Naruto turns the technique into one of his most recognizable combat strategies."],
  fire: ["FIREBALL JUTSU","A classic Fire Release technique strongly associated with the Uchiha clan, producing a powerful stream of flames from the user's mouth."]
};
document.querySelectorAll(".jutsu").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".jutsu").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    const [title,text] = jutsuData[btn.dataset.jutsu];
    document.getElementById("jutsuTitle").textContent = title;
    document.getElementById("jutsuText").textContent = text;
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const chakraBtn = document.getElementById("chakraBtn");
const field = document.querySelector(".chakra-field");
chakraBtn.addEventListener("click", () => {
  field.classList.toggle("active");
  chakraBtn.textContent = field.classList.contains("active") ? "Chakra Active" : "Activate Chakra";
});

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav nav");
navToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
