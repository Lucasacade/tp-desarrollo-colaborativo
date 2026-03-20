let votos = 0;

const boton = document.getElementById("votar");
const textoVotos = document.getElementById("contador");

boton.addEventListener("click", function () {
    votos = votos + 1;
    textoVotos.innerText = "Votos: " + votos;
    console.log("voto registrado");
});

const form = document.getElementById("formPropuesta");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que se recargue la página

    let nombre = document.getElementById("nombre").value.trim();
    let idea = document.getElementById("idea").value.trim();

    // Validación correcta
    if (nombre === "" || idea === "") {
        mensaje.innerText = "⚠️ Completa todos los campos";
        mensaje.style.color = "red";
    } else {
        mensaje.innerText = "✅ Propuesta enviada correctamente";
        mensaje.style.color = "green";

        // Opcional: limpiar inputs
        form.reset();
    }
});