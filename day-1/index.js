const countdownDisplay = (document.getElementById(
  "countdown-display"
).innerHTML = renderCountdown());

function renderCountdown() {
  const christmas = 25;
  // Task:
  // - Get today's date (you only need the day).
  // - Calculate remaining days.
  // - Display remaining days in countdownDisplay.
  const d = new Date();
  const now = d.getDate();
  const christmasDate = christmas - now;
  return christmasDate;
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
