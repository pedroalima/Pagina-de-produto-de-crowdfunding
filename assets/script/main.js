
// Abrir menu mobile
const mobileMenuButton = document.querySelector(".menu-mobile__button")
const mobileModal = document.querySelector(".menu-mobile__content")

    // Esconder navbar ao abrir e fechar menu
const navbar = document.querySelector(".navbar")

const hideMenu = () => {
    navbar.classList.toggle("hide")
}

mobileMenuButton.addEventListener('click', () => {
    mobileModal.showModal();
    hideMenu();
})

// fechar menu mobile
const mobileCloseButton = document.querySelector("#close-menu")

mobileCloseButton.addEventListener('click', () => {
    mobileModal.close();
    hideMenu();
})

    