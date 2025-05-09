const ValidadorSenha = require('./classes/ValidadorSenha');

describe('Senhas', () => {
    let validador;

    beforeEach(() =>{
        validador = new ValidadorSenha();
    });

    test('Validar senha', ()=>{
        const senha = ('Senha123!')
        expect(validador(senha)).toBe(true)
    });

    test('Senha tem que ter simbolo', () => {
        const senha = ('Senha123')
        expect(validador(senha)).toBe(false)
    });

    test('Senha tem que ter número',() => {
        const senha = ('Senha!')
        expect(validador(senha)).toBe(false)
    });

    test('Senha tem que ter maiuscula', () => {
        const senha = ('senha123!')
        expect(validador(senha)).toBe(false)
    });

    test('Senha tem que ter no minimo 8 caracteris', () => {
        const senha = ('S1!')
        expect(validador(senha)).toBe(false)
    })

    test('Senha não pode ser vazio', () => {
        const senha = ('')
        expect(validador(senha)).toBe(false)
    })

})