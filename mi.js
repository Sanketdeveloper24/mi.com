function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("sad").style.opacity = "0.7";
}

function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("sad").style.opacity = "1";
}

function changeMode() {
  let mybody = document.body;
  mybody.classList.toggle("mydark");
  if (mybody.classList.contains("mydark")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
}
