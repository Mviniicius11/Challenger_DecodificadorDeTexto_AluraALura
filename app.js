
// function ocultarClasses() {
//     const elementosOcultarEntrada = ["digiteUmTexto", "nenhumaMsg", "imgSaida", "conteudoSaidaTextoCriptografado", "conteudoSaidaBotoes"];

//     for (i = 0; i < elementosOcultarEntrada.length; i++) {
//         var display = 

//       }
// }

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

function alterarCriptografiaDisplay() {
    document.getElementById("digiteUmTexto").style.display = "none";

    document.getElementById("nenhumaMsg").style.display = "none";

    document.getElementById("imgSaida").style.display = "none";

    document.getElementById("conteudoSaidaTextoCriptografado").style.display = "block";

    document.getElementById("conteudoSaidaBotoes").style.display = "block";

}

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
    // var textoCopiado = document.getElementById('conteudoSaidaTextoCriptografado');
    // textoCopiado.select();

    // document.execCommand('copy');
    let campoTexto = document.getElementById("conteudoSaidaTextoCriptografado").value;

    navigator.clipboard.writeText(campoTexto).then(() => {
        // console.log(campoTexto)
    })
}



// Comandos*

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

textarea.addEventListener('input', ajustarOpacidade);
