function toggleMenu() {
    const menu = document.querySelector(".nav-item:nth-child(3)");
    const overlay = document.querySelector("#overlay");
    const hamburguer = document.querySelector("#hamburguer");
    
    menu.classList.toggle("start");
    overlay.classList.toggle("start");
    hamburguer.classList.toggle("start");
}

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// // function to toggle between light and dark theme
// function toggleTheme() {
//     if (localStorage.getItem('theme') === 'theme-light') {
//         setTheme('theme-dark');
//     } else {
//         setTheme('theme-light');
//     }
// }

// (function () {
//     if (localStorage.getItem('theme') === 'theme-dark') {
//         setTheme('theme-dark');
//         document.getElementById('slider').checked = false;
//     } else {
//         setTheme('theme-light');
//       document.getElementById('slider').checked = true;
//     }
// })();

setTheme("theme-light");