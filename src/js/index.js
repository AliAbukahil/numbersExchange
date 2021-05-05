// Variables
const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

const date = new Date();
const checkNow = document.querySelector("#check-now");
document.querySelector("#title").innerHTML = "Days Counter";

const getDayName = () => {
  return date.toLocaleDateString("en-EN", {
    weekday: "long",
  });
};

// Event listeners

//Functions

function weekend(e) {
  e.preventDefault();
  const userName = document.querySelector("#user-name").value;
  const result = document.querySelector(".result");
  if (userName != "") {
    result.innerHTML = `What'up! ${userName}, Today is ${getDayName()}, ${
      5 - date.getDay()
    } days let till weekend`;
  } else {
    document.querySelector("#user-name").placeholder = "Do it or not up to U";
  }
}
checkNow.addEventListener("click", weekend);
