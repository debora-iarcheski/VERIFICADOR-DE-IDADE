
function verificar() {
   const dataAtual = new Date()
   const anoAtual = dataAtual.getFullYear() // FullYear pega a data com 4 digitos
   const anoFormulario = document.getElementById('texto-ano')
   const resultado = document.getElementById('resultado')

   if (anoFormulario.value.length == 0 || anoFormulario.value > anoAtual) {
      alert('[ERRO] verifique os dados e tente novamente')
   } else {
      const sexoFormulario = document.getElementsByName('genero')
      const idade = anoAtual - Number(anoFormulario.value)
      let genero = '' //let para que ele possa mudar o valor da variavel
      let imgPerson = document.getElementById("img-person")

      if (sexoFormulario[0].checked) {
         genero = 'Homem'
         if (idade > 0 && idade <= 10){
            imgPerson.src = "./assets/menino.png"
         } else if (idade > 10 && idade <= 50) {
            imgPerson.src = "./assets/homem.png"
         } else {
            imgPerson.src = "./assets/idoso.png"
         }
      } else if (sexoFormulario[1].checked) {
         genero = 'Mulher'
         if (idade > 0 && idade <= 10){
            imgPerson.src = "./assets/menina.png"
         } else if (idade > 10 && idade <= 50) {
            imgPerson.src = "./assets/mulher.png"
         } else {
            imgPerson.src = "./assets/idosa.png"
         }
         
      } 
      resultado.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
   }
}