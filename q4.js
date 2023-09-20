import * as calculateNotas from './calculateNotas'

let campo1 = process.argv[2]
[campo1].join(' ')
console.log('Maximo:',calculateNotas.maior(campo1.split(',')))
console.log('Minimo:',calculateNotas.menor(campo1.split(',')))
console.log('Media:',calculateNotas.media(campo1.split(',')))
