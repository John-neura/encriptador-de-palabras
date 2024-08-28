function encriptar() {
    let inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        document.getElementById("resultado").innerHTML = `
            <p>Ningún mensaje fue encontrado</p>
            <span>Ingrese el texto para poder encriptar o desencriptar</span>`;
        return;
    }
    let encriptedText = btoa(encodeURIComponent(inputText));
    document.getElementById("resultado").innerHTML = `<p>${encriptedText}</p>`;
}

function desencriptar() {
    let inputText = document.getElementById("inputText").value;
    if (inputText.trim() === "") {
        document.getElementById("resultado").innerHTML = `
            <p>Ningún mensaje fue encontrado</p>
            <span>Ingrese el texto para poder encriptar o desencriptar</span>`;
        return;
    }
    try {
        let desencriptedText = decodeURIComponent(atob(inputText));
        document.getElementById("resultado").innerHTML = `<p>${desencriptedText}</p>`;
    } catch (e) {
        document.getElementById("resultado").innerHTML = `
            <p>Error al desencriptar el texto. Asegúrese de que el texto encriptado sea correcto.</p>`;
    }
}
