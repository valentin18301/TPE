// Script para la funcionalidad de navegación
const productsLink = document.querySelector('a[href= "carrito.js"]');

productsLink.addEventListener('click', (event) => {
    event.preventDefault();
    // Agregar lógica para navegar a la página de productos aquí
    console.log('Navegando a la página de productos');
});
