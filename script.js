let colors = [
  { id: "dark-btn", className: "dark" },
  { id: "green-btn", className: "green" },
  { id: "yellow-btn", className: "yellow" },
  { id: "orange-btn", className: "orange" },
  { id: "pink-btn", className: "pink" },
];

colors.forEach((button) => {
  let element = document.getElementById(button.id);
  element.addEventListener("click", () => {
    document.body.className = "";
    document.body.classList.toggle(button.className);
    F;
  });
});

let dynamicText = document.querySelector("#dynamic-text");
function change() {
  const dynamicText = document.getElementById("dynamic-text");
  const text = ["Web-Developer", "Explorer", "Student"]
  let currentindex = 0;

  setInterval(() => {
    dynamicText.textContent = text[currentindex];
    currentindex = (currentindex + 1) % text.length;
  }, 2000);
  
}
change();

let openButtons = document.querySelectorAll(".details-button");

openButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let cards = this.parentElement.parentElement.querySelector(".cards");
    let cardContent =
      this.parentElement.parentElement.querySelector(".cards-content");
    if (cardContent.style.display === "none") {
      cardContent.style.display = "block";
    } else {
      cardContent.style.display = "none";
    }
    if (cards.style.display !== "none") {
      cards.style.display = "none";
      alert("Display : none");
    }
  });
});

let closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let cardContent =
      this.parentElement.parentElement.querySelector(".cards-content");
    if (cardContent.style.display === "block") {
      cardContent.style.display = "none";
    } else {
      cardContent.style.display = "block";
    }
    if (cards.style.display === "none") {
      cards.style.display = "block";
      alert("Display : block");
    }
  });
});
