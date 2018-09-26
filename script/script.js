/*clicar e add uma tarefa embaixo> limpar o campo da tarefa> clicar no botao e excluir a tarefa>*/
/*pegar input criar um p e colocar o ele dentro> pegar o p e colocar dentro de uma div>
/*deletar a tarefa quando  clicar o botão de excluir */
const input = document.getElementById("taskInput")
const taskBox = document.getElementById("taskBox")
// const taskDiv = document.createElement("div")
// const task = document.createElement("p")
const deleteButton = document.getElementById("deleteButton")
const button = document.getElementById("inputBtn")
const divstylebox = document.querySelector("divstylebox")

button.addEventListener("click", function (event) {
    event.preventDefault()


    //Validar o campo se estiver nulo ou as outras variaveis
    //Trim remove os espaços necesários 
    
    if (input.value === "" ||input.value.length === 0  || !input.value.trim() || input.value === " " || input.value === null || input.value === undefined) {
        input.focus()
        return false
    }


  
  
    const taskDiv = document.createElement("div")
    taskDiv.className = "taskdivclasse"
    const task = document.createElement("p")
   

    //Criado div para colocar botao de excluir, dps deu uma classe e por ultimo criou no html
    const btnDeleteTask = document.createElement("div")
    btnDeleteTask.className="btnDeleteTask"
    btnDeleteTask.innerHTML= ` x `
   

    //Botao excluir tarefas 
    btnDeleteTask.addEventListener("click", function(){
        taskDiv.remove()
    })

    task.innerHTML = taskInput.value
    taskDiv.appendChild(btnDeleteTask)
    taskDiv.appendChild(task)
    taskBox.appendChild(taskDiv)

    //Após tudo ele deixa o campo em branco    
    taskInput.value = ""

    //Ao clicar nas tarefas ela fica cinza 
    taskDiv.addEventListener("click", function () {
        
        task.className = "class-styleJss__check"
        // taskDiv.value = ""
    })

    
    // FASE 3 - MARCAR TODOS OS ITENS COMO FEITO
    const checkButton = document.getElementById("checkButton")
    checkButton.addEventListener("click", function () {
        task.className = "class-styleJss__check"
        // taskDiv.value = ""
    })

    //FASE 3 - EXCLUIR TUDO DA LISTA 
    deleteButton.addEventListener("click" , function(E){
    E.preventDefault()
        taskDiv.remove()
    
     })
    
    

})



//FASE 3 - EXCLUIR TUDO DA LISTA 
    // deleteButton.addEventListener("click" , function(E){
    // E.preventDefault()
    //     taskDiv.remove()
    
    //  })
    