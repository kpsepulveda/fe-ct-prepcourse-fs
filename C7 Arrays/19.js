function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  return Array.from(arguments).reduce((acumulador, elemento) => acumulador * elemento);
  if (arguments.length === 0) {
    return 0;
}
}

module.exports = multiplicarArgumentos;
