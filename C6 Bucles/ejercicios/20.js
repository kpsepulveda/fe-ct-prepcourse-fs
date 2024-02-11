function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
}  var suma = 0;
  
for (var i = 1; i <= n; i++) {
  suma += i;
  
  if (suma > 100) {
  
    break;
  }
}


return suma;


console.log(sumarHastaNConBreak(10)); 55 
console.log(sumarHastaNConBreak(20)); 105 
console.log(sumarHastaNConBreak(1));   1 

module.exports = sumarHastaNConBreak;
