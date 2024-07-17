//Efeito do cursor

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".link");
const labels = document.querySelectorAll('label');
const headers = document.querySelectorAll('h1');
const texts = document.querySelectorAll('p');

window.addEventListener("mousemove", (e) => {
  cursor.animate(
    {
      left: `${e.clientX}px`,
      top: `${e.clientY}px`,
    },
    {
      duration: 500,
      fill: "forwards",
      easing: "ease",
    }
  );
});

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("expand");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
});

labels.forEach((label) => {
  label.addEventListener("mouseenter", () => {
    cursor.classList.add("expand");
  });

  label.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
});

headers.forEach((head) => {
  head.addEventListener("mouseenter", () => {
    cursor.classList.add("expand");
  });

  head.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
});

texts.forEach((text) => {
  text.addEventListener("mouseenter", () => {
    cursor.classList.add("expand");
  });

  text.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
  });
});

