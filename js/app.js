var numero = parseInt(prompt("Escribe un número entero entre 0 y 100"));
if( numero % 2 !== 0 ){
	document.write("Odd!");
	}
else if( numero % 2 == 0 && numero >= 2 && numero <= 5 ){
    document.write("Good");
}
else if( numero % 2 == 0 && numero >= 6 && numero <= 20 ){
    document.write("Great");
}
else if( numero % 2 == 0 && numero >= 20 ){
    document.write("Perfect!");
};
