const listaDeInvitados = document.getElementById("nuevoInvitado");
const invitadoInput = document.getElementById("nuevoInvitado");
const botonAgregar = document.getElementById("agregarInvitado");

const invitados = [];
botonAgregar.addEventListener("click", () => {
  const nuevoInvitado = invitadoInput.value;
  invitados.push(nuevoInvitado);
  invitadoInput.value = "";
  renderizarLista();
});
