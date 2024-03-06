

document.getElementById('navigationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var selectedOption = document.getElementById('rol').value;
    var destinationUrl = getDestinationUrl(selectedOption);
    window.location.href = destinationUrl;
});

function getDestinationUrl(selectedOption) {
    switch (selectedOption) {
        case 'registroConductor':
            return 'registroCond.html';
        case 'registroGuarda':
            return 'registroGuarda.html';
        case 'corridas':
            return 'corridaTrabajos.html';
        case 'listas':
            return 'listas.html';
        case 'registroPersonal':
            return 'registroPersonal.html';
        default:
            return '';
    }
}
function generarCampos(tipo, contenedorId, contenedorRelevoId) {
    const cantidad = document.getElementById(tipo).value;
    const contenedor = document.getElementById(contenedorId);
    const contenedorRelevo = document.getElementById(contenedorRelevoId);
    contenedor.innerHTML = "";
    contenedorRelevo.innerHTML = "";

    // Campos de Conductor, Guarda o Piloto
    for (let i = 0; i < cantidad; i++) {
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    const h4 = document.createElement("h4");
    h4.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    div.appendChild(h4);
    contenedor.appendChild(div);

    // Campos de Legajo
    const colLegajo = document.createElement("div");
    colLegajo.classList.add("col-md-2");

    const fromGroupLegajo = document.createElement("div");
    fromGroupLegajo.classList.add("form-floating");

    const inputLegajo = document.createElement("input");
    inputLegajo.type = "number";
    inputLegajo.classList.add("form-control", "input-number");
    inputLegajo.name = `${tipo}_legajo[]`;
    inputLegajo.maxLength = 6;

    const labelLegajo = document.createElement("label");
    labelLegajo.setAttribute("for", `floatingInputGrid_${tipo}__legajo_${i}`);
    labelLegajo.textContent = "Legajo";

    formGroupServicio.appendChild(inputLegajo);
    formGroupServicio.appendChild(labelLegajo);
    colServicio.appendChild(fromGroupLegajo);

    // Campos de Nombre
    const colNombre = document.createElement("div");
    colNombre.classList.add("col-md-6");

    const formGroupNombre = document.createElement("div");
    formGroupNombre.classList.add("form-floating");

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.classList.add("form-control");
    inputNombre.name = `${tipo}_nombre[]`;
    inputNombre.pattern = "[A-Z\\sa-z]{3,20}";
    inputNombre.required = true;

    const labelNombre = document.createElement("label");
    labelNombre.setAttribute("for", `floatingInputGrid_${tipo}_{tipo}_nombre_${i}`);
    labelNombre.textContent = "Nombre y Apellido";

    formGroupNombre.appendChild(inputNombre);
    formGroupNombre.appendChild(labelNombre);
    colNombre.appendChild(formGroupNombre);

    // Campos de Hora de Inicio
const colHoraInicio = document.createElement("div");
colHoraInicio.classList.add("col-md-2");

const formGroupHoraInicio = document.createElement("div");
formGroupHoraInicio.classList.add("form-floating");

const inputHoraInicio = document.createElement("input");
inputHoraInicio.type = "time";
inputHoraInicio.classList.add("form-control");
inputHoraInicio.name = `${tipo}_hora_inicio[]`;

const labelHoraInicio = document.createElement("label");
labelHoraInicio.setAttribute("for", `floatingInputGrid_${tipo}_hora_inicio_${i}`);
labelHoraInicio.textContent = "Hora de Inicio";

formGroupHoraInicio.appendChild(inputHoraInicio);
formGroupHoraInicio.appendChild(labelHoraInicio);
colHoraInicio.appendChild(formGroupHoraInicio);

// Campos de Hora de Salida
const colHoraSalida = document.createElement("div");
colHoraSalida.classList.add("col-md-2");

const formGroupHoraSalida = document.createElement("div");
formGroupHoraSalida.classList.add("form-floating");

const inputHoraSalida = document.createElement("input");
inputHoraSalida.type = "time";
inputHoraSalida.classList.add("form-control");
inputHoraSalida.name = `${tipo}_hora_salida[]`;

const labelHoraSalida = document.createElement("label");
labelHoraSalida.setAttribute("for", `floatingInputGrid_${tipo}_hora_salida_${i}`);
labelHoraSalida.textContent = "Hora de Salida";

formGroupHoraSalida.appendChild(inputHoraSalida);
formGroupHoraSalida.appendChild(labelHoraSalida);
colHoraSalida.appendChild(formGroupHoraSalida);

    // Agregamos al contenedor
    contenedor.appendChild(colLegajo);
    contenedor.appendChild(colNombre);
    contenedor.appendChild(colHoraInicio);
    contenedor.appendChild(colHoraSalida);

    // Campos de Relevo
    const divRelevo = document.createElement("div");
    divRelevo.classList.add("col-md-3");
    const h5Relevo = document.createElement("h5");
    h5Relevo.textContent = "Relevo";
    divRelevo.appendChild(h5Relevo);
    contenedorRelevo.appendChild(divRelevo);

    // Campos de Legajo para Relevo
    const colLegajoRelevo = document.createElement("div");
    colLegajoRelevo.classList.add("col-md-2");

    const formGroupLegajoRelevo = document.createElement("div");
    formGroupLegajoRelevo.classList.add("form-floating");

    const inputLegajoRelevo = document.createElement("input");
    inputLegajoRelevo.type = "number";
    inputLegajoRelevo.classList.add("form-control", "input-number");
    inputLegajoRelevo.name = `relevo_${tipo}_legajo[]`;
    inputLegajoRelevo.maxLength = 6;

    const labelLegajoRelevo = document.createElement("label");
    labelLegajoRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo}_legajo_${i}`);
    labelLegajoRelevo.textContent = "Servicio";

    formGroupLegajoRelevo.appendChild(inputLegajoRelevo);
    formGroupLegajoRelevo.appendChild(labelLegajoRelevo);
    colLegajoRelevo.appendChild(formGroupLegajoRelevo);

    // Campos de Nombre para Relevo
    const colNombreRelevo = document.createElement("div");
    colNombreRelevo.classList.add("col-md-6");

    const formGroupNombreRelevo = document.createElement("div");
    formGroupNombreRelevo.classList.add("form-floating");

    const inputNombreRelevo = document.createElement("input");
    inputNombreRelevo.type = "text";
    inputNombreRelevo.classList.add("form-control");
    inputNombreRelevo.name = `relevo_${tipo}_nombre[]`;
    inputNombreRelevo.pattern = "[A-Z\\sa-z]{3,20}";

    const labelNombreRelevo = document.createElement("label");
    labelNombreRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo}_nombre_${i}`);
    labelNombreRelevo.textContent = "Nombre y Apellido";

    formGroupNombreRelevo.appendChild(inputNombreRelevo);
    formGroupNombreRelevo.appendChild(labelNombreRelevo);
    colNombreRelevo.appendChild(formGroupNombreRelevo);

     // Campos de Hora de Inicio para Relevo
const colHoraInicioRelevo = document.createElement("div");
colHoraInicioRelevo.classList.add("col-md-2");

const formGroupHoraInicioRelevo = document.createElement("div");
formGroupHoraInicioRelevo.classList.add("form-floating");

const inputHoraInicioRelevo = document.createElement("input");
inputHoraInicioRelevo.type = "time";
inputHoraInicioRelevo.classList.add("form-control");
inputHoraInicioRelevo.name = `relevo_${tipo}_hora_inicio[]`;

const labelHoraInicioRelevo = document.createElement("label");
labelHoraInicioRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo}_hora_inicio_${i}`);
labelHoraInicioRelevo.textContent = "Hora de Inicio";

formGroupHoraInicioRelevo.appendChild(inputHoraInicioRelevo);
formGroupHoraInicioRelevo.appendChild(labelHoraInicioRelevo);
colHoraInicioRelevo.appendChild(formGroupHoraInicioRelevo);

// Campos de Hora de Salida para Relevo
const colHoraSalidaRelevo = document.createElement("div");
colHoraSalidaRelevo.classList.add("col-md-2");

const formGroupHoraSalidaRelevo = document.createElement("div");
formGroupHoraSalidaRelevo.classList.add("form-floating");

const inputHoraSalidaRelevo = document.createElement("input");
inputHoraSalidaRelevo.type = "time";
inputHoraSalidaRelevo.classList.add("form-control");
inputHoraSalidaRelevo.name = `relevo_${tipo}_hora_salida[]`;

const labelHoraSalidaRelevo = document.createElement("label");
labelHoraSalidaRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo}_hora_salida_${i}`);
labelHoraSalidaRelevo.textContent = "Hora de Salida";

formGroupHoraSalidaRelevo.appendChild(inputHoraSalidaRelevo);
formGroupHoraSalidaRelevo.appendChild(labelHoraSalidaRelevo);
colHoraSalidaRelevo.appendChild(formGroupHoraSalidaRelevo);

// Agregamos al contenedor de Relevo
contenedorRelevo.appendChild(colLegajoRelevo);
contenedorRelevo.appendChild(colNombreRelevo);
contenedorRelevo.appendChild(colHoraInicioRelevo);
contenedorRelevo.appendChild(colHoraSalidaRelevo);

    // Dentro de la función generarCampos, donde creas los campos dinámicos
inputLegajo.setAttribute("data-index", i);
inputNombre.setAttribute("data-index", i);
inputLegajoRelevo.setAttribute("data-index", i);
inputNombreRelevo.setAttribute("data-index", i);

}
}

function imprimirPDF() {
var documento = new jsPDF();
documento.setFontSize(12);
var yPosition = 20;

var responsable = document.getElementById('responsable').value.trim();
var numTrabajo = document.getElementById('trabajo').value.trim();

if (!responsable || !numTrabajo) {
alert('Por favor, ingrese el Responsable y el Número de Trabajo.');
return;
}

var secciones = document.querySelectorAll('input[name="secciones"]:checked');
var seccionesSeleccionadas = Array.from(secciones).map(seccion => seccion.value);

// Función para agregar detalles al PDF si el campo no está vacío
function agregarDetalle(texto) {
if (texto) {
    documento.text(20, yPosition, texto);
    yPosition += 10;
}
}

agregarDetalle('Responsable: ' + responsable);
agregarDetalle('Número de Trabajo: ' + numTrabajo);
agregarDetalle('Secciones: ' + seccionesSeleccionadas.join(', '));

function agregarDetallesPersonal(tipo, cantidad, contenedorId) {
for (var i = 0; i < cantidad; i++) {
    var legajoElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_legajo[]"][data-index="${i}"]`);
    var nombreElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_nombre[]"][data-index="${i}"]`);
    var legajo = legajoElement ? legajoElement.value.trim() : '';
    var nombre = nombreElement ? nombreElement.value.trim() : '';

    if (!legajo && !nombre) {
        continue; // Saltar a la siguiente iteración si ambos campos están vacíos
    }

    var detalle = `${tipo} ${i + 1}:`;
    if (servicio) {
        detalle += ` Servicio ${legajo},`;
    }
    if (nombre) {
        detalle += ` Nombre ${nombre}`;
    }
    agregarDetalle(detalle);
}
}

var numConductores = document.getElementById('conductor').value;
var numGuardas = document.getElementById('guarda').value;
var numPilotos = document.getElementById('piloto').value;

agregarDetallesPersonal('Conductor', numConductores, 'conductorCampos');
agregarDetallesPersonal('Relevo de Conductor', numConductores, 'relevoConductorCampos');
agregarDetallesPersonal('Guarda', numGuardas, 'guardaCampos');
agregarDetallesPersonal('Relevo de Guarda', numGuardas, 'relevoGuardaCampos');
agregarDetallesPersonal('Piloto', numPilotos, 'pilotoCampos');
agregarDetallesPersonal('Relevo de Piloto', numPilotos, 'relevoPilotoCampos');

documento.save('formulario.pdf');
}

function limpiarCampos() {
const elementos = document.querySelectorAll('input[type="number"], input[type="text"]');
elementos.forEach(elemento => {
elemento.value = "";
});
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
checkbox.checked = false;
});
}

// Asignamos las funciones a los botones
document.getElementById("btnImprimir").addEventListener("click", imprimirPDF);
document.getElementById("btnCancelar").addEventListener("click", limpiarCampos);