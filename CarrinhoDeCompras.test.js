const CarrinhoDeCompras = require('./classes/CarrinhoDeCompras')

// describe('Carrinho', () => {
//     let carrinho

//     beforeEach(() => {
//         carrinho = new CarrinhoDeCompras();
//     })

//     test('Adicionar algo valido no carrinho', () => {

//         carrinho.adicionarItem('Maçã', 3);
//         expect(carrinho.listarItens()).toEqual([{
//         nome: 'Maçã', quantidade: 3}]);

//     });

//     test('lança erro ao adicionar sem nome ou quantidade inválida', () => {
    
//         expect(() => carrinho.adicionarItem('',2)).toThrow();
//         expect(() => carrinho.adicionarItem('Banana', 0)).toThrow()

//     });

//     test('remove item existente', () => {
//         carrinho.adicionarItem('Banana', 2);
//         carrinho.removerItem('Banana');
//         expect(carrinho.listarItens()).toEqual([]);
//     });
// })

describe('Carrinho', () =>{
    let carrinho

    beforeEach(()=>{
        carrinho = new CarrinhoDeCompras();
    });

    test('Validações tudo certo',() =>{
        carrinho.adicionarItem('Maça', 3);
        expect(carrinho.listarItens()).toEqual([{
        nome: 'Maça', quantidade: 3}]);

        const mockNome = jest.spyOn(carrinho, 'Validar nome').mockReturnValue(true);
        const mockQuantidade = jest.spyOn(carrinho, 'Validar quantidade').mockReturnValue(true);

        const resulte = carrinho.listarItens(itens);

        expect(resulte).toBe(true);
        expect(mockNome).toHaveBeenCalledWith(itens.nome);
        expect(mockQuantidade).toHaveBeenCalledWith(itens.quantidade);

        mockNome.mockRestore();
        mockQuantidade.mockRestore();
    });
});