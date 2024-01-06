
let sliderElement = document.querySelector("#slider");
let buttonElement = document. querySelector ("#button");

let sizePassword = document.querySelector ("#valor");
let password = document.querySelector ("#password");

let containerPassword = document.querySelector ("#container-input");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; /* Altera o script do valor do tamanho */

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    alert ("VAMOS CRIAR A SENHA")
}