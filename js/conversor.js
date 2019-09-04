
alert("Conversor de temperaturas SA - Física")


function convertTemp(direction)
{

var fahrenheitvalue = document.convert.temperaturaFahrenheit, 
celsiusvalue = document.convert.temperaturaCelsius, 
kelvinvalue = document.convert.temperaturaKelvin;


if (direction == "fahrenheitConversion") 
{celsiusvalue.value = Math.round((fahrenheitvalue.value - 32) * (5/9));
kelvinvalue.value = Math.round((parseInt(celsiusvalue.value) + 459.67) * (5/9)); //Conversor Fahrenheit
} 

else if (direction == "kelvinConversion"){
	fahrenheitvalue.value = Math.round((parseInt(celsiusvalue.value) * (9/5)) -  459.67);
	celsiusvalue.value = Math.round((fahrenheitvalue.value - 32) * (5/9)); //Conversor kelvin

}


else{
	fahrenheitvalue.value = Math.round((parseInt(celsiusvalue.value) * (9/5)) + 32);
	kelvinvalue.value = Math.round((parseInt(celsiusvalue.value) + 273)); //Conversor de celsius
}
}











function LIMPATUDO()
{
document.convert.temperaturaFahrenheit.value="";
document.convert.temperaturaCelsius.value="";				//FUNÇÃO LIMPA ESSA CARALHA
document.convert.temperaturaKelvin.value="";
}