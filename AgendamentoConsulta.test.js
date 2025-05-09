const AgendamentoConsulta = require('./AgendamentoConsulta');

describe('AgendamentoConsulta', () => {
  let agendamento;

  beforeEach(() => {
    agendamento = new AgendamentoConsulta();
  });

  test('agenda uma consulta válida', () => {
    const paciente = 'João';
    const dataFutura = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // Amanhã

    agendamento.agendarConsulta(paciente, dataFutura);

    expect(agendamento.listarConsultas()).toEqual([
      { paciente, data: dataFutura }
    ]);
  });

  test('lança erro se paciente for omitido', () => {
    const dataFutura = new Date(Date.now() + 1000).toISOString();
    expect(() => agendamento.agendarConsulta(null, dataFutura)).toThrow('Paciente e data são obrigatórios.');
  });

  test('lança erro se data for omitida', () => {
    expect(() => agendamento.agendarConsulta('Maria', null)).toThrow('Paciente e data são obrigatórios.');
  });

  test('lança erro se data for inválida', () => {
    expect(() => agendamento.agendarConsulta('Carlos', 'data errada')).toThrow('Data inválida.');
  });

  test('lança erro se data não for futura', () => {
    const dataPassada = new Date(Date.now() - 10000).toISOString();
    expect(() => agendamento.agendarConsulta('Ana', dataPassada)).toThrow('A data deve ser futura.');
  });

  test('cancela uma consulta existente', () => {
    const paciente = 'Lucia';
    const dataFutura = new Date(Date.now() + 100000).toISOString();

    agendamento.agendarConsulta(paciente, dataFutura);
    agendamento.cancelarConsulta(paciente);

    expect(agendamento.listarConsultas()).toEqual([]);
  });

  test('listar consultas retorna todas as agendadas', () => {
    const data1 = new Date(Date.now() + 100000).toISOString();
    const data2 = new Date(Date.now() + 200000).toISOString();

    agendamento.agendarConsulta('Paulo', data1);
    agendamento.agendarConsulta('Carla', data2);

    expect(agendamento.listarConsultas()).toEqual([
      { paciente: 'Paulo', data: data1 },
      { paciente: 'Carla', data: data2 },
    ]);
  });
});
