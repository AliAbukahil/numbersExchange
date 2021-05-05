// Days Counter Variables
const year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

const date = new Date();
const checkNow = document.querySelector("#check-now");
document.querySelector("#title").innerHTML = "Days Counter";

////////// before after Variables
const slider = document.querySelector(".slider input");
const img = document.querySelector(
  ".contianer__images .contianer__images--img-2"
);
const drag = document.querySelector(".slider .slider__drag");

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

/// before after function
slider.oninput = () => {
  let monkey = slider.value;
  drag.style.left = monkey + "%";
  img.style.width = monkey + "%";
};
