
let x = $(document);
x.ready(inicio);

function inicio() {
    $('#boton1').click(function () {
        alert("Botón pulsado");
    });
}