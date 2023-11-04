let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navlist');

menu.addEventListener('click', () =>{
    console.log(menu)
    navbar.classList.toggle('active');
});