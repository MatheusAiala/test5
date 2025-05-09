class Calculadora {
    somar(a, b) {
      return a + b;
    }
  
    somarComValidacao(a, b) {
      if (!this.validarNumeros(a, b)) {
        throw new Error('Números inválidos');
      }
      return this.somar(a, b);
    }
  
    validarNumeros(a, b) {
      return typeof a === 'number' && typeof b === 'number';
    }
  }
  
  module.exports = Calculadora;
  