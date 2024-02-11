function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
} if (a === 0 || b === 0) {
  return 0;
}

var producto = 1;


for (var i = a; i <= b; i++) {
  producto *= i;
}

return producto;


console.log(productoEntreNúmeros(1, 5));  120 
console.log(productoEntreNúmeros(3, 7));  2520 
console.log(productoEntreNúmeros(-2, 2));  -8 
console.log(productoEntreNúmeros(0, 10));  0 

module.exports = productoEntreNúmeros;