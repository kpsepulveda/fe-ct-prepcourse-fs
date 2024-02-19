function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter(elemento => typeof elemento === 'number' && elemento > 10).length;
  console.log(contarElementosMayoresA10(['array']));
  return(1);
}

module.exports = contarElementosMayoresA10;
