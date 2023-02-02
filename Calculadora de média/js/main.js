function ConverterDolar() {
  var valorElemento = document.getElementById("valorD");
  var valorD = parseFloat(valorElemento.value);
  console.log(typeof valorD);
  var valorEmReal = (valorD * 5.07).toFixed(2);

  Printar(valorEmReal);
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valorE");
  var valorE = parseFloat(valorElemento.value);
  console.log(typeof valorE);
  var valorEmReal = (valorE * 5.53).toFixed(2);

  Printar(valorEmReal);
}

function ConverterYuan() {
  var valorElemento = document.getElementById("valorY");
  var valorY = parseFloat(valorElemento.value);
  console.log(typeof valorY);
  var valorEmReal = (valorY * 0.74).toFixed(2);

  Printar(valorEmReal);
}

function Printar(valorEmReal) {
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
  alert(valorConvertido);
}
