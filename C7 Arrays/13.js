function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(elemento => typeof elemento === 'number' && elemento % 2 === 0);
  console.log(filtrarNumerosPares(['array']));
  return (array);

}

module.exports = filtrarNumerosPares;
