const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

//box move
const boxes = document.querySelectorAll(".box");
const circle_img = document.querySelector(".circle-img");

window.addEventListener("mousemove", (e) => {
  const X = (e.clientX / window.innerWidth - 0.5) * -1;
  const Y = (e.clientY / window.innerHeight - 0.5) * -1;

  const strength = 4;

  const moveX = X * strength;
  const moveY = Y * strength;

  boxes.forEach((b) => {
    b.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  circle_img.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

//scroll animation
const items = document.querySelectorAll(".animate-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation-start");
      }
    });
  },
  { threshold: 0.2, root: document.querySelector(".myBoxs") }
);

items.forEach((item) => observer.observe(item));
