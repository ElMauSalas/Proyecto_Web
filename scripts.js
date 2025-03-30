// Función para desplazarse al inicio de la página
// Esta función se utiliza para llevar al usuario al inicio de la página con un desplazamiento suave.
function scrollToTop() {
    window.scrollTo({ 
        top: 0, // Posición vertical en píxeles (0 significa la parte superior de la página)
        behavior: 'smooth' // Habilita el desplazamiento suave
    });
}

// Función para habilitar desplazamiento suave en enlaces de anclaje
// Esta función selecciona todos los enlaces que comienzan con "#" (enlaces de anclaje) y les agrega un comportamiento personalizado.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Agrega un evento "click" a cada enlace de anclaje
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace (saltos bruscos)

        // Obtiene el elemento objetivo al que apunta el enlace
        const target = document.querySelector(this.getAttribute('href'));

        // Define un desplazamiento adicional para compensar la altura de la barra de navegación fija
        const offset = 80; // Altura en píxeles de la barra de navegación (ajustar según sea necesario)

        // Calcula la posición del elemento objetivo menos el desplazamiento
        const targetPosition = target.offsetTop - offset;

        // Desplaza la página a la posición calculada con un efecto suave
        window.scrollTo({
            top: targetPosition, // Posición vertical calculada
            behavior: 'smooth' // Habilita el desplazamiento suave
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("cantidad-taza1");

    for (let i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
});




