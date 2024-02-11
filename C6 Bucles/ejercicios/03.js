function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
} if (x > y) {
  return x;
} else {
  
  return y;
}


// Ejemplos de uso:
console.log(obtenerMayor(5, 10)); 10
console.log(obtenerMayor(10, 5)); 10
console.log(obtenerMayor(5, 5)); 5 

module.exports = obtenerMayor;
