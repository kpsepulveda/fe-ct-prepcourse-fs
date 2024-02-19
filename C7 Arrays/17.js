function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
  console.log(agregarNumeros([1, 2, 3, 4, 5]));
  return(15);
}

module.exports = agregarNumeros;
