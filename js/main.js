// document.addEventListener("contextmenu", function(e){
//   e.preventDefault();
// } )

"use strict"

//  //  //  //  //  //  //  //  //

// header and btn fixed
var x = document.getElementById("head");
var btn = document.getElementById("up");

window.onscroll = function () {
  if (window.scrollY > 200) {
    x.classList.add("headerFixed");
    btn.classList.add("btn-f");
  } else {
    x.classList.remove("headerFixed");
    btn.classList.remove("btn-f");
  }
};

btn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
// header and btn fixed

//  //  //  //  //  //  //  //  //

//////////////////////////////
// blog

let imgs = document.getElementById("img");
let exit = document.getElementById("close");
let lightcontainer = document.getElementById("lightcontainer");

imgs.addEventListener("click", function () {
  lightcontainer.style.display = "flex";
});

exit.addEventListener("click", function () {
  lightcontainer.style.display = "none";
});

// blog

//////////////////////////////
