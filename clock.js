const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function setClock() {
      const now = new Date();

      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minutesDegrees = ((minutes / 60) * 360) + 90;
      const hoursDegrees = ((hours / 12) * 360) + 90;

      secondHand.style.transform = `rotate(${secondsDegrees}deg)`
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setClock, 1000)
setClock();
