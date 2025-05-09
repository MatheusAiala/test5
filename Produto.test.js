const Produto = require('./classes/Produto');

describe('Produtos', ()=>{

    test('PRODUTOS', ()=>{
        let p = new Produto();
        const mock = spyOn(p, 'validarNome').mockReturnValue(true);

        const resulta = p.cadastrarProduto('Arroz')

        expect(resulta).toEqual({nome: 'Arroz'});
        expect(mock).toHaveBeenCalledWith('Arroz')

        mock.mockRestore()
    })


})