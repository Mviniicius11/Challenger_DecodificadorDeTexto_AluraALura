var textarea = document.getElementById('textoInput');
var div = document.getElementById('botoes_entrada');

function ajustarOpacidade() {
    if (textarea.value === '') {
        div.style.opacity = '0.5';
        div.style.cursor = 'auto';
    } else {
        div.style.opacity = '1';
        div.style.cursor = 'pointer';
    }
}

// switch display empty message
function alterarCriptografiaDisplay() {

    document.getElementById("nenhumaMsg").style.display = "none";

    document.getElementById("imgSaida").style.display = "none";

    document.getElementById("conteudoSaidaTextoCriptografado").style.display = "block";

    document.getElementById("conteudoSaidaBotoes").style.display = "block";

}

// functions criptgraphy and decryptography
function criptografarTexto() {
    let resultado = document.getElementById("textoInput").value


        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")

    conteudoSaidaTextoCriptografado.value = resultado

}

function descriptografarTexto() {
    let resultado = document.getElementById("textoInput").value


        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")

    conteudoSaidaTextoCriptografado.value = resultado
}

function copiarTexto() {
    let campoTexto = document.getElementById("conteudoSaidaTextoCriptografado").value;

    navigator.clipboard.writeText(campoTexto).then(() => {
    })
}



// buttons commands

function btnCriptografar() {

    var conteudoTextarea = document.getElementById("textoInput").value;

    if (conteudoTextarea.trim() !== "") {
        alterarCriptografiaDisplay()
        criptografarTexto()

    } else {
    }
}

function btnDescriptografar() {

    var conteudoTextarea = document.getElementById("textoInput").value;

    if (conteudoTextarea.trim() !== "") {
        alterarCriptografiaDisplay()
        descriptografarTexto()

    } else {
    }
}
// opacity buttons
textarea.addEventListener('input', ajustarOpacidade);