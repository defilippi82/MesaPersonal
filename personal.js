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

    for (let i = 0; i < cantidad; i++) {
        // Campos de Conductor, Guarda o Piloto
    const div = document.createElement("div");
    div.classList.add("col-md-3");
    const h4 = document.createElement("h4");
    h4.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    div.appendChild(h4);
    contenedor.appendChild(div);

    // Campos de Servicio
    const colServicio = document.createElement("div");
    colServicio.classList.add("col-md-2");

    const formGroupServicio = document.createElement("div");
    formGroupServicio.classList.add("form-floating");

    const inputServicio = document.createElement("input");
    inputServicio.type = "number";
    inputServicio.classList.add("form-control", "input-number");
    inputServicio.name = `${tipo}_legajo[]`;
    inputServicio.maxLength = 6;

    const labelServicio = document.createElement("label");
    labelServicio.setAttribute("for", `floatingInputGrid_${tipo}_${i}`);
    labelServicio.textContent = "Servicio";

    formGroupServicio.appendChild(inputServicio);
    formGroupServicio.appendChild(labelServicio);
    colServicio.appendChild(formGroupServicio);

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
    labelNombre.setAttribute("for", `floatingInputGrid_${tipo}_${i}`);
    labelNombre.textContent = "Nombre y Apellido";

    formGroupNombre.appendChild(inputNombre);
    formGroupNombre.appendChild(labelNombre);
    colNombre.appendChild(formGroupNombre);

    // Agregamos al contenedor
    contenedor.appendChild(colServicio);
    contenedor.appendChild(colNombre);

    // Campos de Relevo
    const divRelevo = document.createElement("div");
    divRelevo.classList.add("col-md-3");
    const h5Relevo = document.createElement("h5");
    h5Relevo.textContent = "Relevo";
    divRelevo.appendChild(h5Relevo);
    contenedorRelevo.appendChild(divRelevo);

    // Campos de Servicio para Relevo
    const colServicioRelevo = document.createElement("div");
    colServicioRelevo.classList.add("col-md-2");

    const formGroupServicioRelevo = document.createElement("div");
    formGroupServicioRelevo.classList.add("form-floating");

    const inputServicioRelevo = document.createElement("input");
    inputServicioRelevo.type = "number";
    inputServicioRelevo.classList.add("form-control", "input-number");
    inputServicioRelevo.name = `relevo_${tipo}_legajo[]`;
    inputServicioRelevo.maxLength = 6;

    const labelServicioRelevo = document.createElement("label");
    labelServicioRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo}_${i}`);
    labelServicioRelevo.textContent = "Servicio";

    formGroupServicioRelevo.appendChild(inputServicioRelevo);
    formGroupServicioRelevo.appendChild(labelServicioRelevo);
    colServicioRelevo.appendChild(formGroupServicioRelevo);

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
    labelNombreRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo}_${i}`);
    labelNombreRelevo.textContent = "Nombre y Apellido";

    formGroupNombreRelevo.appendChild(inputNombreRelevo);
    formGroupNombreRelevo.appendChild(labelNombreRelevo);
    colNombreRelevo.appendChild(formGroupNombreRelevo);

    // Agregamos al contenedor de Relevo
    contenedorRelevo.appendChild(colServicioRelevo);
    contenedorRelevo.appendChild(colNombreRelevo);

    // Dentro de la función generarCampos, donde creas los campos dinámicos
inputServicio.setAttribute("data-index", i);
inputNombre.setAttribute("data-index", i);
inputServicioRelevo.setAttribute("data-index", i);
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
    var servicioElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_legajo[]"][data-index="${i}"]`);
    var nombreElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_nombre[]"][data-index="${i}"]`);
    var servicio = servicioElement ? servicioElement.value.trim() : '';
    var nombre = nombreElement ? nombreElement.value.trim() : '';

    if (!servicio && !nombre) {
        continue; // Saltar a la siguiente iteración si ambos campos están vacíos
    }

    var detalle = `${tipo} ${i + 1}:`;
    if (servicio) {
        detalle += ` Servicio ${servicio},`;
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
