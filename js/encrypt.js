btnEncrip = document.getElementById("btnEncript");
btnDecrip = document.getElementById("btnDecript");
btnCopiar = document.getElementById("btnCopiar");

function validar(texto){
    const regex = /[a-z]|\s/gm;

    if ( texto.match(regex).length != texto.length ){
        return false;
    }
}

function encriptar() {
    cadena = document.getElementById("cadena").value;

    if ( validar(cadena) != false) {
        const llave = ["enter", "imes", "ai", "ober", "ufat"];
        const regex = [/e/g, /i/g, /a/g, /o/g, /u/g];

        for (let i = 0; i < llave.length; i++) {
            cadena = cadena.replaceAll(regex[i], llave[i]);
        }
        document.getElementById("Resultado").innerHTML = cadena;
        document.getElementById("cadena").value = "";
    }else {
        alert("El texto es invalido");
    }
}

function desencriptar(){
    cadena = document.getElementById("cadena").value;

    if ( validar(cadena) != false) {
        const llave = ["e", "i", "a", "o", "u"];
        const regex = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];

        for (let i = 0; i < llave.length; i++) {
            cadena = cadena.replaceAll(regex[i], llave[i]);
        }
        document.getElementById("Resultado").innerHTML = cadena;
        document.getElementById("cadena").value = "";
    }else {
        alert("El texto introducido es invalido");
    }
}

function copiar(){
    var copyText = document.getElementById("Resultado");
    copyText.select();
    copyText.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(copyText.value);

    alert("Se ha copiado el texto al portapales!!!")
}

btnEncrip.onclick = encriptar;
btnDecrip.onclick = desencriptar;
btnCopiar.onclick = copiar;