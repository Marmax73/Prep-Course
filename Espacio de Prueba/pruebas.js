function laVocal(letter){
 const testingDeVocal = /[aeiouAEIOU]/
 const testeado = testingDeVocal.test(letter)

  console.log(testeado)
 
}
laVocal("T")