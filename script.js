const targetDate = new Date("2023-09-04"); // Defina a data alvo aqui
const daysElement = document.getElementById("days");

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  daysElement.textContent = daysDifference;
}

// Chamada inicial para exibir a contagem regressiva imediatamente
updateCountdown();

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);
