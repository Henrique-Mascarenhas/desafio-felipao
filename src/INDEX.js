// Desafio do felipao

let nomeheroi = "leitanael"
let experienciaheroi = 8945
let nivelheroi;
let rodando = true

while (rodando === true){

if (experienciaheroi < 1000){
    nivelheroi = "ferro";
}   else if (experienciaheroi >= 1001 && experienciaheroi <= 2000){
    nivelheroi = "bronze"
}   else if (experienciaheroi >= 2001 && experienciaheroi <= 5000){
    nivelheroi = "prata"
}   else if (experienciaheroi >= 5001 && experienciaheroi <= 6000){
    nivelheroi = "ouro"
}   else if (experienciaheroi >= 6001 && experienciaheroi <= 7000){
    nivelheroi = "platina"
}   else if (experienciaheroi >= 7001 && experienciaheroi <= 8000){
    nivelheroi = "ascendente"
}   else if (experienciaheroi >= 8001 && experienciaheroi <= 9000){
    nivelheroi = "imortal"
}   else {
    nivelheroi = "radiante"
    rodando === false;
} 
}

console.log ("a classificação do herói " + nomeheroi + "é " + nivelheroi);