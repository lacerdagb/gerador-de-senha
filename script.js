
let sliderElement = document.querySelector("#slider");
let buttonElement = document. querySelector ("#button");

let sizePassword = document.querySelector ("#valor");
let password = document.querySelector ("#password");

let containerPassword = document.querySelector ("#container-input");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; /* Altera o script do valor do tamanho */

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() { //Função para gerar os números aleatórios

    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
       }
     console.log(pass); //Esse comando mostra o resultado no Inspecionar > Console 

    containerPassword.classList.remove("hide"); // Vai remover o hide para mostrar a senha.
    password.innerHTML = pass;

}