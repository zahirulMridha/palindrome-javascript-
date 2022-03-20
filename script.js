const input = document.querySelector(".inputs input");
const button = document.querySelector(".inputs button");
const showText = document.querySelector(".show-text");

let filterInput;
// by click show result (second)
button.addEventListener("click", () => {
  let reverse = filterInput.split("").reverse().join("");
  if (filterInput != reverse) {
    showText.innerHTML =` <p>This <span> is not palindrome </span> </p>`
    showText.style.display = "block"
  } else {
    showText.innerHTML =` <p>This is <span>palindrome </span> </p>`
    showText.style.display = "block"
  }
});

// input (first)
input.addEventListener("keyup", () => {
  filterInput = input.value.replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return button.classList.add("active");
  }
  button.classList.remove("active");
  showText.style.display = "none"
});

