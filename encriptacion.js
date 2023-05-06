export function encriptarTexto(textoNormal) {

    const encriptacion = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    };

    let resultadoEncriptado = "";
    var textoNormal = textoNormal.toLowerCase();

    for (let x = 0; x < textoNormal.length; x++) {
        if (encriptacion.hasOwnProperty(textoNormal[x])) {
            resultadoEncriptado += encriptacion[textoNormal[x]];
        } else {
            resultadoEncriptado += textoNormal[x];
        }
    }
    return resultadoEncriptado;
}

export function desencriptarTexto(textoEncriptado) {

    const desencriptacion = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u",
    };

    let resultadoDesencriptado = "";
    
    var textoEncriptado = textoEncriptado.toLowerCase();

    let i = 0;

    while (i < textoEncriptado.length) {
        let encontrado = false;
        
        for (let clave in desencriptacion) {
            if (desencriptacion.hasOwnProperty(clave) && textoEncriptado.substring(i, i + clave.length) === clave) {
            resultadoDesencriptado += desencriptacion[clave];
            i += clave.length;
            encontrado = true;
            break;
            }
        }
        
        if (!encontrado) {
            resultadoDesencriptado += textoEncriptado[i];
            i++;
        }
    }
    return resultadoDesencriptado;    
}