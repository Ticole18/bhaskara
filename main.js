var valorA = prompt("Infome o valor de a:");
var valorB = prompt("Infome o valor de b:");
var valorC = prompt("Infome o valor de c:");
var coeficiente1;
var coeficiente2;
var delta = (valorB * valorB)-4 * valorA * valorC;

document.write("Valor de Delta =>" + delta +"<br/><br/>");

if(delta<0){
    document.write("Para Delta negativo, não existem raízes reais.<br/>");
}
else{
    document.write("Para Delta positivo, possuímos duas raízes reais: <br/>");
    coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
    coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

    document.write("x' = " + coeficiente1 + "<br/>");
    document.write("x'' = " + coeficiente2 + "<br/>");
} 