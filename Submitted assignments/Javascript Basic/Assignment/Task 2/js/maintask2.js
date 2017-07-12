function foam(){
var a = document.getElementById('input').value;

var b = document.getElementById('input2').value;

 var c = document.getElementById('input3').value;

 var d = document.getElementById('input4').value;

 var e = document.getElementById('input5').value;

 var f = document.getElementById('input6').value;

 var g = document.getElementById('input7').value;

 var str= a+" "+b+" "+c+" "+d+" "+e+" "+f+" "+g;

var arr=str.split(" ");
document.getElementById('demo').innerHTML="[''"+arr.join("'',''")+"'']";
}
