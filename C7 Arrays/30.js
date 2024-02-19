function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let contador = {};
  
  for (let i = 0; i < numeros.length; i++) {

    if (contador[numeros[i]]) {
      return numeros[i];
    }
    
    contador[numeros[i]] = 1;
  }
  
  return null;
}

module.exports = encontrarElementoRepetido;