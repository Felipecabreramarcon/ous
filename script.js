let count = 1;
document.getElementById('radio1').checked = true;

setInterval(function () {
    nextImage()
}, 4000);

function nextImage() {
    count++;

    if (count > 3) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}

let cont = 1;
function nextImagetenis() {

    cont++;
    if (cont > 5) {
        cont = 1;
    }

    document.getElementById('radio' + cont + 't').checked = true;
}

function backImagetenis() {

    cont--;
    if (cont < 1) {
        cont = 5;
    }

    document.getElementById('radio' + cont + 't').checked = true;
}

let contar = 1;
function nextImagetenisd() {

    contar++;
    if (contar > 5) {
        contar = 1;
    }

    document.getElementById('radio' + contar + 'td').checked = true;
}

function backImagetenisd() {

    contar--;
    if (contar < 1) {
        contar = 5;
    }

    document.getElementById('radio' + contar + 'td').checked = true;
}

let contarParaRoupas = 1;
function nextImageRoupas() {

    contarParaRoupas++;
    if (contarParaRoupas > 3) {
        contarParaRoupas = 1;
    }

    document.getElementById('radio' + contarParaRoupas + 'r').checked = true;
}

function backImageRoupas() {

    contarParaRoupas--;
    if (contarParaRoupas < 1) {
        contarParaRoupas = 3;
    }

    document.getElementById('radio' + contarParaRoupas + 'r').checked = true;
}

let contarParaAcessorios = 1;
function nextImageAc() {

    contarParaAcessorios++;
    if (contarParaAcessorios > 3) {
        contarParaAcessorios = 1;
    }

    document.getElementById('radio' + contarParaAcessorios + 'ac').checked = true;
}

function backImageAc() {

    contarParaAcessorios--;
    if (contarParaAcessorios < 1) {
        contarParaAcessorios = 3;
    }

    document.getElementById('radio' + contarParaAcessorios + 'ac').checked = true;
}