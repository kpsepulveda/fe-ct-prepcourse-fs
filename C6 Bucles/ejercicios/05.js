function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
}if (valor) {
  return "Soy verdadero";
} else {
  return "Soy falso";
}


console.log(esVerdadero(true));"Soy verdadero"
console.log(esVerdadero(false)); "Soy falso"
console.log(esVerdadero(0));"Soy falso"
console.log(esVerdadero(1)); "Soy verdadero"

module.exports = esVerdadero;
