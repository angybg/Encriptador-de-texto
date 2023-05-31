const entrada = document.querySelector(".text-ingres");
const salida = document.querySelector(".txt-salida");
const copy = document.querySelector(".btn-copiar");
const oculto = document.querySelector(".ocultar");
copy.style.display= "none";
oculto.style.display = "";


function validarTxt(){
    let textoEs = document.querySelector(".text-ingres").value;
    let vali = textoEs.match(/^[a-z]*$/);
    if(!vali || vali === 0){
        alert("Sólo letras minúsculas y sin acentos.");
        location.reload();
        return true;
    }
}

function buttonCopiar(){
    salida.select();
    navigator.clipboard.writeText(salida.value);
    salida.value = "";
    alert("El texto se ha copiado");
}

function buttonEncriptar(){
    if(!validarTxt()){
        const txtEncrip = encriptar(entrada.value)
        salida.value = txtEncrip
        salida.style.backgroundImage = "none"
        entrada.value = "";
        copy.style.display = "block";
        oculto.style.display = "none";
    }
}

function buttonDesencriptar(){
    const txtEncrip = desencriptar(entrada.value)
    salida.value = txtEncrip;
    entrada.value = "";
    copiar.style.display = "block";
    oculto.style.display = "none";
}

function encriptar(mensajeEncriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();
    for (let i = 0; i < codigo.length; i++){
        if(mensajeEncriptado.includes(codigo[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(codigo[i][0], codigo[i][1])
        } 
    }
    return mensajeEncriptado;
}

function desencriptar(mensajeDesencriptado){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();
    for(let i = 0; i<codigo.length; i++){
        if(mensajeDesencriptado.includes(codigo[i][1])){
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return mensajeDesencriptado;
}