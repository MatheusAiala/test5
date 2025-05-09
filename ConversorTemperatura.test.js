const ConversorTemperatura = require('./classes/ConversorTemperatura')

describe('ConversorTemperatura', () =>{

    const converte = new ConversorTemperatura()

test ('Converter de celsius para fahrenheit', () =>{

    const resul = converte.celsiusParaFahrenheit(0)
    expect(resul.toBe(32))

})

test ('Coverter para fahrenheit para celsius',() => {

    const resul = converte.fahrenheitParaCelsius(32)
    expect(resul.toBe(32))

})
});