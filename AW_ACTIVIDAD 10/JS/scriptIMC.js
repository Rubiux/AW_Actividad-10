document.getElementById("btnIMC").addEventListener("click", function() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultadoIMC").innerHTML = "Ingresa valores válidos.";
        return;
    }

    var imc = peso / (altura * altura);
    var categoria = "";

    if (imc < 18.5) categoria = "Bajo peso";
    else if (imc < 25) categoria = "Normal";
    else if (imc < 30) categoria = "Sobrepeso";
    else categoria = "Obesidad";

    document.getElementById("resultadoIMC").innerHTML =
        "Tu IMC es " + imc.toFixed(2) + "<br>Categoría: " + categoria;
});
