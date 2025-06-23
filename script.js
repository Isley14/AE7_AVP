// Obtener referencias
const contadorSolicitudes = document.getElementById("contador-solicitudes");
const contadorConexiones = document.getElementById("contador-conexiones");

// Función para contar las solicitudes restantes
function actualizarContadorSolicitudes() {
  const solicitudesRestantes = document.querySelectorAll(".request").length;
  contadorSolicitudes.textContent = `Solicitudes de Conexión (${solicitudesRestantes})`;
}

// Función para contar las conexiones actuales
function actualizarContadorConexiones() {
  const conexiones = document.querySelectorAll("#lista-conexiones li").length;
  contadorConexiones.textContent = `Tus Conexiones (${conexiones})`;
}

// Aceptar solicitud
document.querySelectorAll(".accept").forEach(boton => {
  boton.addEventListener("click", () => {
    const solicitud = boton.closest(".request");
    const nombre = solicitud.querySelector("span").textContent;
    const img = solicitud.querySelector("img").src;

    // Agregar a conexiones
    const nuevaConexion = document.createElement("li");
    nuevaConexion.innerHTML = `<img src="${img}" /> ${nombre}`;
    document.getElementById("lista-conexiones").appendChild(nuevaConexion);

    // Eliminar solicitud
    solicitud.remove();

    // Actualizar contadores
    actualizarContadorSolicitudes();
    actualizarContadorConexiones();
  });
});

// Rechazar solicitud
document.querySelectorAll(".decline").forEach(boton => {
  boton.addEventListener("click", () => {
    const solicitud = boton.closest(".request");
    solicitud.remove();

    // Solo actualiza solicitudes
    actualizarContadorSolicitudes();
  });
});

// Editar perfil
document.querySelector(".edit-link").addEventListener("click", (e) => {
  e.preventDefault();
  const nuevoNombre = prompt("Nuevo nombre:");
  const nuevaBio = prompt("Nueva biografía:");

  if (nuevoNombre) {
    document.getElementById("nombre").textContent = nuevoNombre;
  }

  if (nuevaBio) {
    document.getElementById("bio").textContent = nuevaBio;
  }
});