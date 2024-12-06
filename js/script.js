//ANIMAR A ENTRADA DOS ELEMENTOS GRÁFICOS EM BARRA//
////////////////////////////////////////////////////

document.addEventListener("scroll", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const barPosition = bar.getBoundingClientRect().top; // Posição da barra em relação à tela
    const windowHeight = window.innerHeight;

    // Verifica se a barra está visível na tela
    if (barPosition < windowHeight - 100) {
      if (!bar.classList.contains("visible")) {
        // Marca a barra como visível e anima a largura
        const value = bar.getAttribute("data-value");
        bar.style.width = `${value}%`;
        bar.style.opacity = 1; // Torna a barra visível
        bar.classList.add("visible");
      }
    }
  });
});

//OCULTAR E MOSTRAR A DIV DO TOP//
//////////////////////////////////

document.addEventListener("scroll", () => {
  const scrollIndicator = document.getElementById("scrollIndicator");

  // Verifica se o scroll foi para baixo e se a posição do scroll é maior que 0
  if (window.scrollY > 50) {
    // Mostra quando o usuário rolou mais de 50px
    scrollIndicator.style.opacity = 1;
    scrollIndicator.style.transition = "opacity 0.5s ease-in-out"; // Transição suave
  } else {
    scrollIndicator.style.opacity = 0; // Oculta a div quando no topo
  }
});

//ANIMAR A ENTRADA DAS DIVS//
/////////////////////////////

document.addEventListener("scroll", () => {
  const animatedDivs = document.querySelectorAll(".animatedDiv");
  const windowHeight = window.innerHeight;

  animatedDivs.forEach((div) => {
    const rect = div.getBoundingClientRect();

    if (rect.top < windowHeight - 100) {
      div.style.opacity = "1";
      div.style.transform = "translateY(0)";
      div.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    } else {
      div.style.opacity = "0";
      div.style.transform = "translateY(50px)";
    }
  });
});

// Estado inicial
const animatedDivs = document.querySelectorAll(".animatedDiv");
animatedDivs.forEach((div) => {
  div.style.opacity = "0";
  div.style.transform = "translateY(50px)";
});
