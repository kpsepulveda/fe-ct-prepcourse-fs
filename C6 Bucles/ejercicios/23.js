function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
}  var veces = 0;
  
do {
  num += 5;
  veces++;
} while (veces < 8);

return num;


console.log(doWhile(0));  40 

module.exports = doWhile;