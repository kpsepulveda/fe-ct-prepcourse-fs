function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
}if (num > 20 && num < 50) {
  return true; 
} else {
  return false; 
}


console.log(estaEnRango(25)); true
console.log(estaEnRango(10)); false
console.log(estaEnRango(50));  false

module.exports = estaEnRango;
