/* PROCURAR BOTÃO */
document.querySelector("#add-time")
    /* QUANDO CLICAR NO BOTAO */
    .addEventListener("click", cloneField)
/* EXECUTAR UMA AÇÃO */
function cloneField() {
    /* DUPLICAR OS CAMPOS */
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)//boolean: true ou false
    /* PEGAR OS CAMPOS. QUE CAMPO?*/
    const fields = newFieldContainer.querySelectorAll("input")
  /* PARA CADA CAMPO, LIMPAR */
  fields.forEach(function(field){
      /* PEGAR O FIELD DO MOMENTO E LIMPA ELE */
      field.value=""
  })
    /* COLOCAR NA PÁGINA:ONDE */
    document.querySelector("#schedule-items").appendChild(newFieldContainer)


}




