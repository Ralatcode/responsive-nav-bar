const navTrigger = document.querySelector('.menu-trigger');
const navMenu = document.querySelector('.nav-menu');
let navLinks = document.querySelectorAll('.nav-links');

navTrigger.addEventListener('click', () => {
    const menuVisibilty = navMenu.getAttribute("data-visible");

    if (menuVisibilty == "false") {
        navMenu.setAttribute("data-visible", true);
        navTrigger.setAttribute("aria-expanded", true)
    } else {
        navMenu.setAttribute("data-visible", false);
        navTrigger.setAttribute("aria-expanded", false)
    }

})

navLinks = Array.from(navLinks);

navLinks.forEach(link => {
    link.addEventListener('click',() => {
        navLinks.forEach((e) => {
            e.classList.remove('active')
        }) 
        link.classList.add('active');
    })
})


