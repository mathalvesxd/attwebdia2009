let campo1 = process.argv[2]
import factorial from 'factorial'
const printFatorial = () => {
    [campo1].join(' ')
    console.log('Fatorial:',factorial(campo1))
}
printFatorial()
