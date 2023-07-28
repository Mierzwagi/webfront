const titulo = document.getElementById("titulo")
//Inputs
const nomeInput = document.getElementById("nome")
const emailInput = document.getElementById("e-mail")
const telefoneInput = document.getElementById("telefone")
//Outputs
const resultado = document.getElementById("resultado")
const resultado1 = document.getElementById("resultado1")
const resultado2 = document.getElementById("resultado2")

console.log(titulo.textContent)

titulo.textContent = "Senai Cotia 2023"

function  salvar(){

    resultado.textContent = nomeInput.value
    resultado1.textContent = emailInput.value
    resultado2.textContent = telefoneInput.value

}


/* ===== Introdução JavaScript */

/* var nome = "Giovanna"
let idade = 45
const anoNascimento = 2003
let idadeEsposa = "45"
 */
/* 
= atribuição
== comparar se é igual
=== comparar se é exatamente igual
 */

/* ar isOld = true;

let num = 98 
const pi = 3.14

console.log(titulo)

if (idade == idadeEsposa) {
    console.log("igual")
}else{
    console.log("diferente")
} */


/* ----------------------- Array ---------------------------- */
/* Acessmos o array fazendo reff ao index */

/* let lista = [1,2,3,4,5,6]
for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    
    console.log(element)
} */



