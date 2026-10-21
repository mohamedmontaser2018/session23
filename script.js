// ---------- "click to show" toggle ----------
const showBtn = document.getElementById("showBtn");
const revealText = document.getElementById("revealText");

showBtn.addEventListener("click", () => {
  const isHidden = revealText.classList.toggle("hidden");
  showBtn.textContent = isHidden ? "click to show" : "click to hide";
});

// ---------- Light bulb on/off ----------
const bulb = document.getElementById("bulb");
const status = document.getElementById("status");
const onBtn = document.getElementById("onBtn");
const offBtn = document.getElementById("offBtn");

function setBulb(on) {
  bulb.classList.toggle("on", on);
  status.textContent = on ? "The bulb is on." : "The bulb is off.";
}

onBtn.addEventListener("click", () => setBulb(true));
offBtn.addEventListener("click", () => setBulb(false));
