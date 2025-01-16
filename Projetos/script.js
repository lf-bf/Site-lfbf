var lista_cards = [
  {
      titulo: "Reconhecimento Facial",
      link: "./reconhecimento_facial/index.html",
      descricao: "Projeto de visão computacional utilizando detecção em tempo real."
  },
  {
      titulo: "Apple Tree",
      link: "./apple/index.html",
      descricao: "Jogo para Ipad desenvolvido utilizando Swift."
  },
  {
      titulo: "PyTube",
      link: "./pyTube/index.html",
      descricao: "Aplicativo de download de vídeos do Youtube."
  },
  {
      titulo: "K-Miner",
      link: "./kminer/index.html",
      descricao: "Interface gráfica (GUI) para mineração de dados."

  }
];


for (i = 0; i < lista_cards.length; i++){
  var card = ` <div class ="card">
                  <a href="${lista_cards[i].link}" class="link"><h1>${lista_cards[i].titulo}</h1></a>
                  <p>${lista_cards[i].descricao}</p>
                </div>`;

  document.getElementById('card_holder').innerHTML += card;
}


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
