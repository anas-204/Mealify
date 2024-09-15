var darktheme = document.getElementById("dark");
var lighttheme = document.getElementById("light");
var root = document.querySelector(":root");
// var links =document.getElementsByClassName("nav-link")); 
var navlinks = document.getElementById("navbarNavAltMarkup");

function closeNav(){
    navlinks.classList.remove("show");
}

function activateDarkTheme(){
    root.style.setProperty("--used-color","#C17E1F");
    root.style.setProperty("--section1-background","#252525");
    root.style.setProperty("--sections2-background","#202020");
    root.style.setProperty("--navbar-color","#171717");
    root.style.setProperty("--logo-color","#fff");
    root.style.setProperty("--navlink-color","#aaafa9");
    root.style.setProperty("--section-p-color","#FFF");
}

function activateLightTheme(){
    root.style.setProperty("--used-color","#CE1212");
    root.style.setProperty("--section1-background","#EEE");
    root.style.setProperty("--sections2-background","#fff");
    root.style.setProperty("--navbar-color","#FFF");
    root.style.setProperty("--logo-color","#212529");
    root.style.setProperty("--navlink-color","#4d504c");
    root.style.setProperty("--section-p-color","#6D6F72");
}

darktheme.onclick = function(){
    lighttheme.classList.remove("d-none");
    darktheme.classList.add("d-none");
    activateDarkTheme();
    lighttheme.classList.add("text-light");
};
lighttheme.onclick= function(){
    darktheme.classList.remove("d-none");
    lighttheme.classList.add("d-none");
    activateLightTheme();
}

