let peso = parseFloat(prompt("Informe o peso: "));
let altura = parseFloat(prompt("Informe o altura: "));

let imc = (peso/(altura*altura));

document.write("O imc é igual a: ",imc)

if(imc >=18.5 && IMC <=24.9){
document.write("O peso está normal!!")
}else if ((imc >=25 &&  imc <-29.9)){
document.write("O peso está no sobrepeso")
}else if ((imc >=30 && imc <=34.9)){
document.write("Você está obesidade grau I")
}else{
    document.write ("Voçê está abaixo do peso ou da obesidade II")
}






