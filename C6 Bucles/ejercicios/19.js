function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
} var suma = 0;
  

for (var i = 1; i <= n; i++) {
  suma += i;
}

return suma;

console.log(sumarHastaN(5)); 15 
console.log(sumarHastaN(10));  55 
console.log(sumarHastaN(1));  1 
module.exports = sumarHastaN;
