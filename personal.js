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
            return 'corridas.html';
        case 'listas':
            return 'listas.html';
        case 'registroPersonal':
            return 'registroPersonal.html';
        default:
            return '';
    }
}
function imprimirPDF() {
    const pdf = new jsPDF();
    const element = document.getElementById('formulario');
    pdf.fromHTML(element, 15, 15);
    pdf.save('archivo.pdf');
}