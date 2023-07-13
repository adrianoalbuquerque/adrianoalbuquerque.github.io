function downloadPDF() {
    // Conteúdo do PDF
    const content = document.querySelector('#content_resume');

    // Confuguração do arquivo PDF
    const options = {
        margin: [10, 10, 10, 10],
        filename: "resumo.pdf",
        html2canvas: {scale: 2},
        jsPdf: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    // Donwload do conteúdo da página
    html2pdf().set(options).from(content).save();
}

function mostrarDivs(className) {
    var divs = document.getElementsByClassName(className);
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = 'block';
    }
    
    var verMais = document.getElementById(className);
    verMais.style.display = 'none';
  }