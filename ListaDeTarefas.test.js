const ListaDeTarefas = require('./classes/ListaDeTarefas');

describe('Lista de Tarefas', () => {
    let lista;

    beforeEach(() => {
        lista = new ListaDeTarefas();
    });

    test('Adiciona uma tarefa na lista', () => {
        lista.adicionarTarefa('estudando');
        expect(lista.listarTarefas()).toContain('estudando');
    });

    test('Remove uma tarefa da lista', () => {
        lista.adicionarTarefa('estudando');
        lista.removerTarefa('estudando');
        expect(lista.listarTarefas()).not.toContain('estudando');
    });

    test('Lança erro ao adicionar tarefa inválida', () => {
        expect(() => lista.adicionarTarefa('')).toThrow('Tarefa inválida.');
    });
});
