//Efeito do cursor

const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll(".link");
const labels = document.querySelectorAll('label');
const headers = document.querySelectorAll('h1');
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
//Efeito de maquina de escrever

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+escapeHtml(this.txt)+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #FF5F1F}";
  document.body.appendChild(css);
};

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
