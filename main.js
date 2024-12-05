// 
let typed = new Typed(".auto-type", {
  strings: ["PROGRAMER", "DIGITAL ARTIST"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// 
const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // entry.target.classList.remove("hidden");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// 
let darkLightMode = document.getElementById("darkLightMode");
let theme = localStorage.getItem("theme");

theme && document.body.classList.add(theme);

darkLightMode.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.removeItem("theme");
  }
};

// 
let dontForget = document.querySelector("#dont-forget");

window.onload = function () {
  dontForget.className = "show";
  setTimeout(function () {
    dontForget.className = dontForget.className.replace("show", "");
  }, 3000);
};


// 
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

//
window.addEventListener("load", () => {
    const loader =  document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () =>{
        document.body.removeChild(document.querySelector(".loader"));
    });
});