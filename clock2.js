// Select clock hands
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
      const now = new Date();

      // Get hours, minutes, and seconds
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      // Calculate degrees for each hand
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
      const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

      // Apply rotation to each hand
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
      hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Update clock every second
setInterval(setClock, 1000);
setClock(); // Initial call to set clock hands immediately
