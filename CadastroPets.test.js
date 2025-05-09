// const CadastroPets = require('./classes/CadastroPets')

// describe("Cadastro de pets com mock", () => {

//     let cadastrar

//     beforeEach(() =>{
//         cadastrar = new CadastroPets();
//     });

//     test('Validações tudo certo', () =>{
//         const pet = {nome: "lulu", idade: 16, tipo: 'gato'}

//         const mockNome = jest.spyOn(cadastrar, 'Validar nome').mockReturnValue(true);
//         const mockIdade = jest.spyOn(cadastrar, 'Validar idade').mockReturnValue(true);
//         const mockTipo = jest.spyOn(cadastrar, 'Validar tipo').mockReturnValue(true);

//         const resulte = cadastrar.validarCadastro(pet);

//         expect(resulte).toBe(true);
//         expect(mockNome).toHaveBeenCalledWith(pet.nome);
//         expect(mockIdade).toHaveBeenCalledWith(pet.idade);
//         expect(mockTipo).toHaveBeenCalledWith(pet.tipo);

//         mockNome.mockRestore();
//         mockIdade.mockRestore();
//         mockTipo.mockRestore();
//     })

// });

const CadastroPets = require('./CadastroPets');

describe("CadastroPets sem mocks (validações reais)", () => {
  let cadastro;

  beforeEach(() => {
    cadastro = new CadastroPets();
  });

  test("Aceita tipos válidos", () => {
    const tiposValidos = ['cachorro', 'gato', 'pássaro', 'roedor'];

    tiposValidos.forEach(tipo => {
      expect(cadastro.validarTipo(tipo)).toBe(true);
    });
  });

  test("Rejeita tipos inválidos", () => {
    const tiposInvalidos = ['peixe', 'dinossauro', '', 'GIRAFA', null, 123];

    tiposInvalidos.forEach(tipo => {
      expect(cadastro.validarTipo(tipo)).toBe(false);
    });
  });

  test("Cadastro falha com tipo inválido", () => {
    const pet = { nome: "Zé", idade: 2, tipo: "peixe" };
    expect(cadastro.validarCadastro(pet)).toBe(false);
  });

  test("Cadastro aprovado com dados corretos", () => {
    const pet = { nome: "Lulu", idade: 3, tipo: "gato" };
    expect(cadastro.validarCadastro(pet)).toBe(true);
  });
});


const CadastroPets = require('./CadastroPets');

describe("CadastroPets com mocks parciais (tipo real)", () => {
  let cadastro;

  beforeEach(() => {
    cadastro = new CadastroPets();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Cadastro válido com tipo real e nome/idade mockados", () => {
    const pet = { nome: "Lulu", idade: 4, tipo: "gato" }; // tipo válido

    // Só mockamos nome e idade
    jest.spyOn(cadastro, 'validarNome').mockReturnValue(true);
    jest.spyOn(cadastro, 'validarIdade').mockReturnValue(true);
    // validarTipo continua real

    const result = cadastro.validarCadastro(pet);
    expect(result).toBe(true);
  });

  test("Cadastro inválido com tipo inválido (validação real)", () => {
    const pet = { nome: "Rex", idade: 3, tipo: "dragão" }; // tipo inválido

    // Mockando apenas nome e idade
    jest.spyOn(cadastro, 'validarNome').mockReturnValue(true);
    jest.spyOn(cadastro, 'validarIdade').mockReturnValue(true);
    // validarTipo é o real e vai reprovar

    const result = cadastro.validarCadastro(pet);
    expect(result).toBe(false); // falha esperada por tipo inválido real
  });
});
