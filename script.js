const botao = document.getElementById("botao");
const perguntaInicial = document.getElementById("pergunta-inicial");
const etapaClique = document.getElementById("etapa-clique");
const responderSim = document.getElementById("responder-sim");
const responderNao = document.getElementById("responder-nao");

responderSim.addEventListener("click", () => {
  // Explosão de confete 💥
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
  });

  perguntaInicial.style.opacity = "0";

  setTimeout(() => {
    perguntaInicial.style.display = "none";
    etapaClique.classList.remove("hidden");
    etapaClique.style.opacity = "0";

    setTimeout(() => {
      etapaClique.style.transition = "opacity 1s ease";
      etapaClique.style.opacity = "1";
    }, 100);
  }, 800);
});

responderNao.addEventListener("click", () => {
  alert("Poxa... mesmo assim, você continua sendo muito especial. 💔");
});

const conteudo = document.getElementById("conteudo");

botao.addEventListener("click", () => {
  botao.style.opacity = "0";
  setTimeout(() => {
    botao.style.display = "none";
    conteudo.classList.remove("hidden");
    conteudo.classList.add("visible");
    iniciarContador();
  }, 800);
});

function iniciarContador() {
  const inicio = new Date("2025-07-26T00:00:00");

  function atualizarContador() {
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById(
      "contador"
    ).innerText = `Já se passaram ${dias} dias, ${horas} horas e ${minutos} minutos desde o dia que eu conheci o amor da minha vida.`;
  }

  atualizarContador();
  setInterval(atualizarContador, 60000); // atualiza a cada minuto
}
