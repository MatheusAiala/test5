class Produto {
    validarNome(nome) {
      return typeof nome === 'string' && nome.trim().length > 0;
    }
  
    cadastrarProduto(nome) {
      if (!this.validarNome(nome)) {
        throw new Error('Nome inválido');
      }
      return { nome };
    }
  }
  
  module.exports = Produto;
  