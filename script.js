function insert(num){
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML= numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML=('');
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
 var resultado = document.getElementById('resultado').innerHTML;
if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
}
}
document.onkeydown = teclas;
function teclas(e){
    var valor= document.getElementById('resultado').innerHTML;
    if (e.keyCode == 49 || e.keyCode == 97){
     
        document.getElementById('resultado').innerHTML = valor + "1";
    }
    if (e.keyCode == 50 || e.keyCode == 98){
     
        document.getElementById('resultado').innerHTML = valor + "2";
    }
    if (e.keyCode == 51 || e.keyCode == 99){
     
        document.getElementById('resultado').innerHTML = valor + "3";
    }
    if (e.keyCode == 52 || e.keyCode == 100){
     
        document.getElementById('resultado').innerHTML = valor + "4";
    }
    if (e.keyCode == 53 || e.keyCode == 101){
     
        document.getElementById('resultado').innerHTML = valor + "5";
    }
    if (e.keyCode == 54 || e.keyCode == 102){
     
        document.getElementById('resultado').innerHTML = valor + "6";
    }
    if (e.keyCode == 55 || e.keyCode == 103){
     
        document.getElementById('resultado').innerHTML = valor + "7";
    }
    if (e.keyCode == 56 || e.keyCode == 104){
     
        document.getElementById('resultado').innerHTML = valor + "8";
    }
    if (e.keyCode == 57 || e.keyCode == 105){
     
        document.getElementById('resultado').innerHTML = valor + "9";
    }
    if (e.keyCode == 48 || e.keyCode == 96){
     
        document.getElementById('resultado').innerHTML = valor + "0";
    }
    if (e.keyCode == 189 || e.keyCode == 109){
     
        document.getElementById('resultado').innerHTML = valor + "-";
    }
    if (e.keyCode == 193 || e.keyCode == 111){
     
        document.getElementById('resultado').innerHTML = valor + "/";
    }
    if (e.keyCode == 107 || e.keyCode == 187){
  
      document.getElementById('resultado').innerHTML = valor + "+" ;
    }
    if (e.keyCode == 106){
  
        document.getElementById('resultado').innerHTML = valor + "*" ;
    }
    if (e.keyCode == 190){
  
        document.getElementById('resultado').innerHTML = valor + "." ;
    }
    if (e.keyCode == 46){
  
        document.getElementById('resultado').innerHTML=('');
     
      }
      if (e.keyCode == 8){
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
      }
    if (e.keyCode == 13){
  
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado){
            document.getElementById('resultado').innerHTML = eval(resultado);
        }  
    }
}
var checkbox = document.querySelector("#check");
var html = document.querySelector("html");

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark-mode');
})
