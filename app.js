const characterLength = document.querySelector(".characterlenghtDiv h2"),
  copyClipboard = document.querySelector("img"),
  slider = document.getElementById("slider"),
  passwordOutput = document.getElementById("passwordOutput"),
  copyedTxt = document.querySelector(".passwordDiv p"),
  checkboxes = document.querySelectorAll(
    '.includeBigDiv input[type="checkbox"]'
  ),
  generateBtn = document.querySelector(".generateBtn"),
  strenghtTxt = document.querySelectorAll(".stenghtColor "),
  streghtTxt = document.querySelector(".strenghtTxtColors h1");

let value = 10,
  password = "",
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers = "0123456789";
symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

let tooweek, week, medium, strong;
passwordOutput.value = "PTx1f5DaFX";
slider.addEventListener("input", function () {
  characterLength.innerHTML = this.value;
  value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.backgroundImage =
    "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " +
    value +
    "%, #18171F " +
    value +
    "%, rgba(24, 23, 31, 1))";
  value = this.value;
});
copyClipboard.addEventListener("click", function () {
  passwordOutput.select();
  document.execCommand("copy");
  copyedTxt.style.display = "block";
  setTimeout(function () {
    copyedTxt.style.display = "none";
  }, 2000);
});

const returnChecked = () => {
  let checked = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checked.push(checkbox.value);
      tooweek = checked[0];
      week = checked[1];
      medium = checked[2];
      strong = checked[3];
    }
  });

  return checked;
};

function generatePassword() {
  let checked = returnChecked();
  let password = "";
  for (let i = 0; i < value; i++) {
    let random = Math.floor(Math.random() * checked.length);
    let randomChar = checked[random];
    if (randomChar === "lowercase") {
      password += lowercase[Math.floor(Math.random() * lowercase.length)];
    } else if (randomChar === "uppercase") {
      password += uppercase[Math.floor(Math.random() * uppercase.length)];
    } else if (randomChar === "numbers") {
      password += numbers[Math.floor(Math.random() * numbers.length)];
    } else if (randomChar === "symbols") {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
  }
  passwordOutput.value = password;
  passwordStrenght();
}

generateBtn.addEventListener("click", function () {
  generatePassword();
});

const passwordStrenght = () => {
  let checked = returnChecked();
  if (tooweek) {
    strenghtTxt[0].style.backgroundColor = "#f64a4a";
    streghtTxt.innerHTML = "TOO WEAK";
    streghtTxt.style.color = "#f64a4a";
  } else {
    strenghtTxt[0].style.backgroundColor = "#18171F";
  }
  if (week) {
    strenghtTxt[0].style.backgroundColor = "#fb7c58";
    strenghtTxt[1].style.backgroundColor = "#fb7c58";
    streghtTxt.innerHTML = "WEAK";
    streghtTxt.style.color = "#fb7c58";
  } else {
    strenghtTxt[1].style.backgroundColor = "#18171F";
  }
  if (medium) {
    strenghtTxt[0].style.backgroundColor = "#f8cd65";
    strenghtTxt[1].style.backgroundColor = "#f8cd65";
    strenghtTxt[2].style.backgroundColor = "#f8cd65";
    streghtTxt.innerHTML = "MEDIUM";
    streghtTxt.style.color = "#f8cd65";
  } else {
    strenghtTxt[2].style.backgroundColor = "#18171F";
  }
  if (strong) {
    strenghtTxt[0].style.backgroundColor = "#a4ffaf";
    strenghtTxt[1].style.backgroundColor = "#a4ffaf";
    strenghtTxt[2].style.backgroundColor = "#a4ffaf";
    strenghtTxt[3].style.backgroundColor = "#a4ffaf";
    streghtTxt.innerHTML = "STRONG";
    streghtTxt.style.color = "#a4ffaf";
  } else {
    strenghtTxt[3].style.backgroundColor = "#18171F";
  }
  if (checked.length === 0) {
    strenghtTxt[0].style.backgroundColor = "#18171F";
    strenghtTxt[1].style.backgroundColor = "#18171F";
    strenghtTxt[2].style.backgroundColor = "#18171F";
    strenghtTxt[3].style.backgroundColor = "#18171F";
    streghtTxt.style.color = "#e6e5ea";
    streghtTxt.innerHTML = "MEDIUM";
  }
};
