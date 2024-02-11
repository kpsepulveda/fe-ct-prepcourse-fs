function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
}if (typeof a === 'number' && typeof b === 'number' && a < 0 && b < 0) {
  
  if (a === b) {
    return true;
  }
}
return false;


console.log(esIgualYNegativo(-5, -5)); true
console.log(esIgualYNegativo(-5, -3)); false
console.log(esIgualYNegativo(5, -5)); false

module.exports = esIgualYNegativo;
