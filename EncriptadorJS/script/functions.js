var mensaje = "";
const vocales = ["e","i","a","o","u"];
const claves = ["enter","imes","ai","ober","ufat"];

function iniciarProceso(opcion){
    mensaje = document.getElementById("area-mensaje").value;
    if(mensaje != ""){
        document.getElementById("con-mensaje").style.display = "block"; 
        document.getElementById("sin-mensaje").style.display = "none"; 
        for(let i = 0; i<vocales.length;i++){

            if(opcion==0){
                encriptar(vocales[i], claves[i]);
            }else{
                desencriptar(claves[i], vocales[i]);
            }
        }

        document.getElementById("mensaje-final").innerHTML = mensaje;
    }
    else{
        alert("Ingrese un mensaje para descifrar");
        document.getElementById("con-mensaje").style.display = "none"; 
        document.getElementById("sin-mensaje").style.display = "block"; 
    }
    
}

function encriptar(vocal, clave){
    mensaje = mensaje.replaceAll(vocal,clave);
}

function desencriptar(clave, vocal){
    mensaje = mensaje.replaceAll(clave, vocal);
}

function copiarMensaje(){
    const text = document.getElementById('mensaje-final').innerText;
    navigator.clipboard.writeText(text);
    alert('Texto copiado');
}

