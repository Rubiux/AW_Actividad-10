document.getElementById("btnConvertir").addEventListener("click", function() {
    var cantidad = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultadoDivisas").innerHTML = "Ingresa una cantidad válida.";
        return;
    }

    var dolar = cantidad * 0.055;
    var euro = cantidad * 0.051;
    var libra = cantidad * 0.045;
    var yen = cantidad * 8.2;

    var resultado = `
        US Dólares: $${dolar.toFixed(2)}<br>
        EU Euros: €${euro.toFixed(2)}<br>
        GB Libras: £${libra.toFixed(2)}<br>
        JP Yenes: ¥${yen.toFixed(2)}
    `;
    document.getElementById("resultadoDivisas").innerHTML = resultado;
});
