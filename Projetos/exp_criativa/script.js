const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".link");
const labels = document.querySelectorAll('label');
const headers = document.querySelectorAll('h1');
//
const the_animation = document.querySelectorAll('.animation')
const the_animation2 = document.querySelectorAll('.animation2')
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation')
        }
            else {
                entry.target.classList.remove('scroll-animation')
            }
        
    })
},
   { threshold: 0.5
   });
//
  for (let i = 0; i < the_animation.length; i++) {
   const elements = the_animation[i];

    observer.observe(elements);
  } 
  for (let i = 0; i < the_animation2.length; i++) {
    const elements = the_animation2[i];
 
     observer.observe(elements);
   } 

//Efeito do cursor

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
