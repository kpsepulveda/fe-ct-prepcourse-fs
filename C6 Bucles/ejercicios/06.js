function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
}if (num >= 100 && num <= 999) {
  return true;
} else {
  return false;
}


console.log(tieneTresDigitos(123)); true
console.log(tieneTresDigitos(9876));  false
console.log(tieneTresDigitos(42)); false

module.exports = tieneTresDigitos;
