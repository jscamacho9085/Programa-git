
function alternarTema() {
    
    const body = document.body;

    body.classList.toggle('tema-oscuro');


    const boton = document.getElementById('btnTema');
    if (body.classList.contains('tema-oscuro')) {
        boton.textContent = 'Modo Claro ☀️';
    } else {
        boton.textContent = 'Modo Oscuro 🌙';
    }
}