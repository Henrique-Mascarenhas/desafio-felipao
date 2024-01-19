// Desafio do felipao

let nomeHeroi = "leitanael"
let experienciaHeroi = 8945
let nivelHeroi;
let rodando = true

while (rodando === true){

if (experienciaHeroi < 1000){
    nivelHeroi = "ferro";
}   else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000){
    nivelHeroi = "bronze"
}   else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000){
    nivelHeroi = "prata"
}   else if (experienciaHeroi >= 5001 && experienciaHeroi <= 6000){
    nivelHeroi = "ouro"
}   else if (experienciaHeroi >= 6001 && experienciaHeroi <= 7000){
    nivelHeroi = "platina"
}   else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000){
    nivelHeroi = "ascendente"
}   else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000){
    nivelHeroi = "imortal"
}   else {
    nivelHeroi = "radiante"
   }    rodando = false;
}

console.log ("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);