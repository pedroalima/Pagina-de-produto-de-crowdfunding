// Constantes do menu mobile
const menuOpenButton = document.querySelector("#open-menu")
const menuMobile = document.querySelector("#menu-mobile")
const menuCloseButton = document.querySelector("#close-menu")
const fade = document.querySelector("#fade")
const navbar = document.querySelector("#navbar")

    // Abrir menu mobile
menuOpenButton.addEventListener("click", () => {
    menuToggle()
})

    // Fechar menu mobile
menuCloseButton.addEventListener("click", () => {
    menuToggle()
})

    // Mostrar e esconder elementos
function menuToggle() {
    menuMobile.classList.toggle("hide")
    fade.classList.toggle("hide")
    navbar.classList.toggle("hide")
} 

// Constantes do modal de produtos
const modalProductOpenButton = document.querySelector("#product__open-button")
const modalProduct = document.querySelector("#modal-product")
const modalProductCloseButton = document.querySelector("#product__close-button")

    // Abrir modal de produtos
modalProductOpenButton.addEventListener("click", () => {
    modalProduct.showModal()
})

    // Fechar modal de produtos
modalProductCloseButton.addEventListener("click", () => {
    modalProduct.close()
})

// Constantes do modal de agradecimento
const modalAcknowOpenButton = document.querySelector("#acknowledgment__open-button")
const modalAcknow = document.querySelector("#modal-acknowledgment")
const modalAcknowCloseButton = document.querySelector("#acknowledgment__close-button")
    
    // Abrir modal de agradecimento
modalAcknowOpenButton.addEventListener("click", () => {
    modalAcknow.showModal()
})

    // Fechar modal de agradecimento
modalAcknowCloseButton.addEventListener("click", () => {
    modalAcknow.close()
})