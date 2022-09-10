var notaDoPrimeiroBimestre = n1
var notaDoSegundoBimestre = n2
var notaDoTerceiroBimestre = n3
var notaDoQuartoBimestre = n4
var NotaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) /4
//Váriaveis usadas na forma de notação, e que cada uma pode ser tambem uma outra notação pra ser usada em uma média final//
console.log(NotaFinal)

function media() { 
        var n1= document.getElementById("n1").value
        var n2= document.getElementById("n2").value
        var n3= document.getElementById("n3").value
        var n4= document.getElementById("n4").value
        
        var media = (Number(n1) + Number(n2) + Number(n3) + Number(n4) ) / 4
        alert(` Sua nota é: ${media}`)
     
      }
