var numeroSecreto = parseInt(Math.random() * 10);
var numeroTentativas = 5;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  //Nesse caso, a condicional deve atender só numeros inteiros (parseInt) e em um intervalo definido(0 a 10)//
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Insira um numero de 0 a 10";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Um pouco mais";
    numeroTentativas--;
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Um pouco menos";
    numeroTentativas--;
  }
  if (numeroTentativas == 0) {
    elementoResultado.innerHTML =
      "Fim das tentativas, O número secreto era " + numeroSecreto;
  }
  console.log(numeroTentativas + " Tentativas");
}
