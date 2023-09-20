let campo1 = process.argv[2]
let campo2 = process.argv[3]
const calculateForm = () =>{
    [campo1,campo2].join(' ')
    if(campo1 && campo2){
        let  areaRetangulo = campo1 * campo2
        console.log(`Area do retangulo:${areaRetangulo}`)
        console.log(`É um retangulo`)
      }
    else{
        let areaQuadrado = campo1 * campo1
      console.log(`Area do quadrado:${areaQuadrado}`)
      console.log(`É um quadrado`)
    }
   
}
calculateForm()
