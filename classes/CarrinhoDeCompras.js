class CarrinhoDeCompras {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(nome, quantidade) {
      if (!nome || quantidade <= 0) {
        throw new Error('Nome e quantidade válida são obrigatórios.');
      }
  
      this.itens.push({ nome, quantidade });
    }
  
    removerItem(nome) {
      this.itens = this.itens.filter(item => item.nome !== nome);
    }
  
    listarItens() {
      return this.itens;
    }
  }
  
  module.exports = CarrinhoDeCompras;
  