alert("Conversor de temperaturas")
alert("Digite qualquer temperatura em qualquer campo que a conversão será feita automaticamente")
function convertTemp(direction)
{
var fObj = document.convert.ftemp, cObj = document.convert.ctemp, kObj = document.convert.ktemp;

if (direction == "ftoc") 
{
    cObj.value = Math.round((fObj.value - 32) * (5/9));
	kObj.value = Math.round((parseInt(cObj.value) + 459.67) * (5/9)); /* Função que converte Fahrenheit */
} 
else if (direction == "ktof") 
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) -  459.67);     /* Função que converte Kelvin */
	cObj.value = Math.round((fObj.value - 32) * (5/9));
	
 }
else
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) + 32); /* Função que converte Celsius */
	kObj.value = Math.round((parseInt(cObj.value) + 273));
 }
}

function clearAll()
{
document.convert.ftemp.value="";
document.convert.ctemp.value="";        /* Função "limpar" */
document.convert.ktemp.value="";
}   