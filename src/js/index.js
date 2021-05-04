// Variables
const button = document.querySelector("#btn");

// Event listeners

button.addEventListener("click", function () {
  let money = document.querySelector("#money").value;
  let numUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  document.querySelector("#output").innerHTML =
    "The newly formatted currency number is" + numUSD.format(money);
});
