
//Funciones de NavBar
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
//Funciones de Corridas de Trabajos


function generarCampos(tipo, contenedorId, contenedorRelevoId) {
    const cantidad = document.getElementById(tipo).value;
    const contenedor = document.getElementById(contenedorId);
    const contenedorRelevo = document.getElementById(contenedorRelevoId);
    contenedor.innerHTML = "";
    contenedorRelevo.innerHTML = "";

    // Campos de Conductor, Guarda o Piloto
    for (let i = 0; i < cantidad; i++) {
        const div = document.createElement("div");
        div.classList.add("row", "g-3");
        const h4 = document.createElement("h4");
        h4.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1);
        div.appendChild(h4);
        contenedor.appendChild(div);

        const colLegajo = document.createElement("div");
        colLegajo.classList.add("col-md-2");

        const formGroupLegajo = document.createElement("div");
        formGroupLegajo.classList.add("form-floating");

        const inputLegajo = document.createElement("input");
        inputLegajo.type = "number";
        inputLegajo.classList.add("form-control", "input-number");
        inputLegajo.name = `${tipo}_legajo[]`;
        inputLegajo.maxLength = 6;
        inputLegajo.id = `floatingInputGrid_${tipo.toLowerCase()}_legajo_${i}`;
        inputLegajo.setAttribute('data-index', i);
        inputLegajo.classList.add(`${tipo.toLowerCase()}-legajo`);

        const labelLegajo = document.createElement("label");
        labelLegajo.setAttribute("for", `floatingInputGrid_${tipo.toLowerCase()}_legajo_${i}`);
        labelLegajo.textContent = "Legajo";

        formGroupLegajo.appendChild(inputLegajo);
        formGroupLegajo.appendChild(labelLegajo);
        colLegajo.appendChild(formGroupLegajo);

        const colNombre = document.createElement("div");
        colNombre.classList.add("col-md-4");

        const formGroupNombre = document.createElement("div");
        formGroupNombre.classList.add("form-floating");

        const inputNombre = document.createElement("input");
        inputNombre.type = "text";
        inputNombre.classList.add("form-control");
        inputNombre.name = `${tipo}_nombre[]`;
        inputNombre.pattern = "[A-Z\\sa-z]{3,20}";
        inputNombre.required = true;
        inputNombre.id = `floatingInputGrid_${tipo.toLowerCase()}_nombre_${i}`;
        inputNombre.setAttribute('data-index', i);
        inputNombre.classList.add(`${tipo.toLowerCase()}-nombre`);

        const labelNombre = document.createElement("label");
        labelNombre.setAttribute("for", `floatingInputGrid_${tipo.toLowerCase()}_nombre_${i}`);
        labelNombre.textContent = "Nombre y Apellido";

        formGroupNombre.appendChild(inputNombre);
        formGroupNombre.appendChild(labelNombre);
        colNombre.appendChild(formGroupNombre);

        const colHoraInicio = document.createElement("div");
        colHoraInicio.classList.add("col-md-2");

        const formGroupHoraInicio = document.createElement("div");
        formGroupHoraInicio.classList.add("form-floating");

        const inputHoraInicio = document.createElement("input");
        inputHoraInicio.type = "time";
        inputHoraInicio.classList.add("form-control");
        inputHoraInicio.name = `${tipo}_hora_inicio[]`;
        inputHoraInicio.id = `floatingInputGrid_${tipo.toLowerCase()}_hora_inicio_${i}`;
        inputHoraInicio.setAttribute('data-index', i);
        inputHoraInicio.classList.add(`${tipo.toLowerCase()}-hora-inicio`);

        const labelHoraInicio = document.createElement("label");
        labelHoraInicio.setAttribute("for", `floatingInputGrid_${tipo.toLowerCase()}_hora_inicio_${i}`);
        labelHoraInicio.textContent = "Hora de Tomada ";

        formGroupHoraInicio.appendChild(inputHoraInicio);
        formGroupHoraInicio.appendChild(labelHoraInicio);
        colHoraInicio.appendChild(formGroupHoraInicio);

        const colHoraSalida = document.createElement("div");
        colHoraSalida.classList.add("col-md-2");

        const formGroupHoraSalida = document.createElement("div");
        formGroupHoraSalida.classList.add("form-floating");

        const inputHoraSalida = document.createElement("input");
        inputHoraSalida.type = "time";
        inputHoraSalida.classList.add("form-control");
        inputHoraSalida.name = `${tipo}_hora_salida[]`;
        inputHoraSalida.id = `floatingInputGrid_${tipo.toLowerCase()}_hora_salida_${i}`;
        inputHoraSalida.setAttribute('data-index', i);
        inputHoraSalida.classList.add(`${tipo.toLowerCase()}-hora-salida`);

        const labelHoraSalida = document.createElement("label");
        labelHoraSalida.setAttribute("for", `floatingInputGrid_${tipo.toLowerCase()}_hora_salida_${i}`);
        labelHoraSalida.textContent = "Hora de Dejada";

        formGroupHoraSalida.appendChild(inputHoraSalida);
        formGroupHoraSalida.appendChild(labelHoraSalida);
        colHoraSalida.appendChild(formGroupHoraSalida);

        div.appendChild(colLegajo);
        div.appendChild(colNombre);
        div.appendChild(colHoraInicio);
        div.appendChild(colHoraSalida);

        contenedor.appendChild(div);

        // Campos de Relevo
        const divRelevo = document.createElement("div");
        divRelevo.classList.add("row", "g-3");
        const h5Relevo = document.createElement("h5");
        h5Relevo.textContent = "Relevo";
        divRelevo.appendChild(h5Relevo);

        const colLegajoRelevo = document.createElement("div");
        colLegajoRelevo.classList.add("col-md-2");

        const formGroupLegajoRelevo = document.createElement("div");
        formGroupLegajoRelevo.classList.add("form-floating");

        const inputLegajoRelevo = document.createElement("input");
        inputLegajoRelevo.type = "number";
        inputLegajoRelevo.classList.add("form-control", "input-number");
        inputLegajoRelevo.name = `relevo_${tipo}_legajo[]`;
        inputLegajoRelevo.maxLength = 6;
        inputLegajoRelevo.id = `floatingInputGrid_relevo_${tipo.toLowerCase()}_legajo_${i}`;
        inputLegajoRelevo.setAttribute('data-index', i);
        inputLegajoRelevo.classList.add(`relevo-${tipo.toLowerCase()}-legajo`);

        const labelLegajoRelevo = document.createElement("label");
        labelLegajoRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo.toLowerCase()}_legajo_${i}`);
        labelLegajoRelevo.textContent = "Legajo";

        formGroupLegajoRelevo.appendChild(inputLegajoRelevo);
        formGroupLegajoRelevo.appendChild(labelLegajoRelevo);
        colLegajoRelevo.appendChild(formGroupLegajoRelevo);

        const colNombreRelevo = document.createElement("div");
        colNombreRelevo.classList.add("col-md-4");

        const formGroupNombreRelevo = document.createElement("div");
        formGroupNombreRelevo.classList.add("form-floating");

        const inputNombreRelevo = document.createElement("input");
        inputNombreRelevo.type = "text";
        inputNombreRelevo.classList.add("form-control");
        inputNombreRelevo.name = `relevo_${tipo}_nombre[]`;
        inputNombreRelevo.pattern = "[A-Z\\sa-z]{3,20}";
        inputNombreRelevo.id = `floatingInputGrid_relevo_${tipo.toLowerCase()}_nombre_${i}`;
        inputNombreRelevo.setAttribute('data-index', i);
        inputNombreRelevo.classList.add(`relevo-${tipo.toLowerCase()}-nombre`);

        const labelNombreRelevo = document.createElement("label");
        labelNombreRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo.toLowerCase()}_nombre_${i}`);
        labelNombreRelevo.textContent = "Nombre y Apellido";

        formGroupNombreRelevo.appendChild(inputNombreRelevo);
        formGroupNombreRelevo.appendChild(labelNombreRelevo);
        colNombreRelevo.appendChild(formGroupNombreRelevo);

        const colHoraInicioRelevo = document.createElement("div");
        colHoraInicioRelevo.classList.add("col-md-2");

        const formGroupHoraInicioRelevo = document.createElement("div");
        formGroupHoraInicioRelevo.classList.add("form-floating");

        const inputHoraInicioRelevo = document.createElement("input");
        inputHoraInicioRelevo.type = "time";
        inputHoraInicioRelevo.classList.add("form-control");
        inputHoraInicioRelevo.name = `relevo_${tipo}_hora_inicio[]`;
        inputHoraInicioRelevo.id = `floatingInputGrid_relevo_${tipo.toLowerCase()}_hora_inicio_${i}`;
        inputHoraInicioRelevo.setAttribute('data-index', i);
        inputHoraInicioRelevo.classList.add(`relevo-${tipo.toLowerCase()}-hora-inicio`);

        const labelHoraInicioRelevo = document.createElement("label");
        labelHoraInicioRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo.toLowerCase()}_hora_inicio_${i}`);
        labelHoraInicioRelevo.textContent = "Hora de Tomada";

        formGroupHoraInicioRelevo.appendChild(inputHoraInicioRelevo);
        formGroupHoraInicioRelevo.appendChild(labelHoraInicioRelevo);
        colHoraInicioRelevo.appendChild(formGroupHoraInicioRelevo);

        const colHoraSalidaRelevo = document.createElement("div");
        colHoraSalidaRelevo.classList.add("col-md-2");

        const formGroupHoraSalidaRelevo = document.createElement("div");
        formGroupHoraSalidaRelevo.classList.add("form-floating");

        const inputHoraSalidaRelevo = document.createElement("input");
        inputHoraSalidaRelevo.type = "time";
        inputHoraSalidaRelevo.classList.add("form-control");
        inputHoraSalidaRelevo.name = `relevo_${tipo}_hora_salida[]`;
        inputHoraSalidaRelevo.id = `floatingInputGrid_relevo_${tipo.toLowerCase()}_hora_salida_${i}`;
        inputHoraSalidaRelevo.setAttribute('data-index', i);
        inputHoraSalidaRelevo.classList.add(`relevo-${tipo.toLowerCase()}-hora-salida`);

        const labelHoraSalidaRelevo = document.createElement("label");
        labelHoraSalidaRelevo.setAttribute("for", `floatingInputGrid_relevo_${tipo.toLowerCase()}_hora_salida_${i}`);
        labelHoraSalidaRelevo.textContent = "Hora de Dejada";

        formGroupHoraSalidaRelevo.appendChild(inputHoraSalidaRelevo);
        formGroupHoraSalidaRelevo.appendChild(labelHoraSalidaRelevo);
        colHoraSalidaRelevo.appendChild(formGroupHoraSalidaRelevo);

        divRelevo.appendChild(colLegajoRelevo);
        divRelevo.appendChild(colNombreRelevo);
        divRelevo.appendChild(colHoraInicioRelevo);
        divRelevo.appendChild(colHoraSalidaRelevo);

        contenedorRelevo.appendChild(divRelevo);
    }
}
function imprimirPDF() {
    const documento = new jsPDF();
    documento.setFontSize(12);

    // Agregar Encabezado
    documento.text(20, 10, "Trenes Argentinos");
    documento.line(20, 10, 100, 10); // (x1, y1, x2, y2)
    let yPosition = 20;

    const responsable = document.getElementById('responsable').value.trim();
    const numTrabajo = document.getElementById('trabajo').value.trim();

    if (!responsable || !numTrabajo) {
        alert('Por favor, ingrese el Responsable y/o el Número de Trabajo.');
        return;
    }

    const secciones = Array.from(document.querySelectorAll('input[name="secciones"]:checked')).map(seccion => seccion.value);

    // Función para agregar detalles al PDF si el campo no está vacío
    const agregarDetalle = (texto) => {
        if (texto) {
            documento.text(20, yPosition, texto);
            yPosition += 10;
        }
    }

    agregarDetalle(`Operador de Personal: ${responsable}`);
    agregarDetalle(`Número de Trabajo: ${numTrabajo}`);
    agregarDetalle(`Secciones a ocupar : ${secciones.join(', ')}`);

    const numConductores = document.getElementById('conductor').value;
    const numGuardas = document.getElementById('guarda').value;
    const numPilotos = document.getElementById('piloto').value;

    const agregarDetallesPersonal = (tipo, cantidad, contenedorId, contenedorRelevoId) => {
        for (let i = 0; i < cantidad; i++) {
            const legajoElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_legajo[]"][data-index="${i}"]`);
            const nombreElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_nombre[]"][data-index="${i}"]`);
            const horaInicioElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_hora_inicio[]"][data-index="${i}"]`);
            const horaSalidaElement = document.querySelector(`#${contenedorId} input[name="${tipo.toLowerCase()}_hora_salida[]"][data-index="${i}"]`);

            const legajo = legajoElement ? legajoElement.value.trim() : '';
            const nombre = nombreElement ? nombreElement.value.trim() : '';
            const horaInicio = horaInicioElement ? horaInicioElement.value : '';
            const horaSalida = horaSalidaElement ? horaSalidaElement.value : '';

            if (!legajo && !nombre && !horaInicio && !horaSalida) continue; // Saltar a la siguiente iteración si todos los campos están vacíos

            let detalle = `${tipo} ${i + 1}:`;
            if (legajo) detalle += ` Legajo ${legajo},`;
            if (nombre) detalle += ` Nombre ${nombre}`;
            if (horaInicio) detalle += `, Hora de Inicio ${horaInicio}`;
            if (horaSalida) detalle += `, Hora de Salida ${horaSalida}`;
            agregarDetalle(detalle);
        }
    }

    const agregarDetallesRelevo = (tipo, cantidad, contenedorId, contenedorRelevoId) => {
        for (let i = 0; i < cantidad; i++) {
            const legajoElement = document.querySelector(`#${contenedorRelevoId} input[name="relevo_${tipo.toLowerCase()}_legajo[]"][data-index="${i}"]`);
            const nombreElement = document.querySelector(`#${contenedorRelevoId} input[name="relevo_${tipo.toLowerCase()}_nombre[]"][data-index="${i}"]`);
            const horaInicioElement = document.querySelector(`#${contenedorRelevoId} input[name="relevo_${tipo.toLowerCase()}_hora_inicio[]"][data-index="${i}"]`);
            const horaSalidaElement = document.querySelector(`#${contenedorRelevoId} input[name="relevo_${tipo.toLowerCase()}_hora_salida[]"][data-index="${i}"]`);

            const legajo = legajoElement ? legajoElement.value.trim() : '';
            const nombre = nombreElement ? nombreElement.value.trim() : '';
            const horaInicio = horaInicioElement ? horaInicioElement.value : '';
            const horaSalida = horaSalidaElement ? horaSalidaElement.value : '';

            if (!legajo && !nombre && !horaInicio && !horaSalida) continue; // Saltar a la siguiente iteración si todos los campos están vacíos

            let detalle = `Relevo de ${tipo} ${i + 1}:`;
            if (legajo) detalle += ` Legajo ${legajo},`;
            if (nombre) detalle += ` Nombre ${nombre}`;
            if (horaInicio) detalle += `, Hora de Inicio ${horaInicio}`;
            if (horaSalida) detalle += `, Hora de Salida ${horaSalida}`;
            agregarDetalle(detalle);
        }
    }

    agregarDetallesPersonal('Conductor', numConductores, 'conductorCampos', 'relevoConductorCampos');
    agregarDetallesRelevo('Conductor', numConductores, 'conductorCampos', 'relevoConductorCampos');
    agregarDetallesPersonal('Guarda', numGuardas, 'guardaCampos', 'relevoGuardaCampos');
    agregarDetallesRelevo('Guarda', numGuardas, 'guardaCampos', 'relevoGuardaCampos');
    agregarDetallesPersonal('Piloto', numPilotos, 'pilotoCampos', 'relevoPilotoCampos');
    agregarDetallesRelevo('Piloto', numPilotos, 'pilotoCampos', 'relevoPilotoCampos');

    // Agregar sección de observaciones
    const observaciones = document.getElementById('observaciones').value.trim();
    if (observaciones) {
        agregarDetalle('Observaciones: ' + observaciones);
    }

    // Cambiar el estilo para el pie de página
    documento.setFontStyle("italic");

    // Agregar Pie de Página
    documento.text(20, documento.internal.pageSize.height - 20, "Generado de la Mesa de Personal.");

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
