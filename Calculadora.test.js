const Calculadora = require('./classes/Calculadora');

describe ("Somar os números", ()=>{

    let cal

    beforeEach(() =>{
        cal = new Calculadora()
    })

    test ('Validar números', ()=>{
        const mockValidar = jest.spyOn(cal, 'Validar número').mockReturnValue(true);

        const resul = cal.somarComValidacao(2, 4);
        expect(resul).toBe(5);
        expect(mockValidar).toHaveBeenCalledWith(2, 3);

        mockValidar.mockRestore();
    })
})