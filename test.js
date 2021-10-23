const lista = [{ primer: 'carne', postre: 'helado' }, { primer: 'pastas', postre: 'flan' }, { primer: 'carne', postre: 'frutas' }, { primer: 'pollo', postre: 'budin' }]

const calcular = type => (acc, curr) => ({ ...acc, [curr[type]]: (acc[curr[type]] ? acc[curr[type]] : 0) + 1 })

const primer = calcular('primer')
const postre = calcular('postre')

console.log(lista.reduce(primer, {}))
console.log(lista.reduce(postre, {}))
