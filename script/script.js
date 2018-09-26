/*clicar e add uma tarefa embaixo> limpar o campo da tarefa> clicar no botao e excluir a tarefa>*/
/*pegar input criar um p e colocar o ele dentro> pegar o p e colocar dentro de uma div>
/*deletar a tarefa quando  clicar o botão de excluir */
const input = document.getElementById("taskInput")
const taskBox = document.getElementById("taskBox")
// const taskDiv = document.createElement("div")
// const task = document.createElement("p")
const deleteButton = document.getElementById("deleteButton")
const button = document.getElementById("inputBtn")

button.addEventListener("click", function (event) {
    event.preventDefault()


    //Validar o campo se estiver nulo ou as outras variaveis
    if (input.value === "" || input.value === " " || input.value === null || input.value === undefined) {
        input.focus()
        return false
    }


    const btnDeleteTask = document.createElement("button")
    const taskDiv = document.createElement("div")
    const task = document.createElement("p")
    const hr = document.createElement("hr")

    //Puxando classe do css para Js
    btnDeleteTask.className="btnDeleteTask"
    //Botao excluir tarefas 
    btnDeleteTask.addEventListener("click", function(){
        taskDiv.remove()
    })

    task.innerHTML = taskInput.value
    task.appendChild(btnDeleteTask)
    task.appendChild(hr)

    taskDiv.appendChild(task)
    taskBox.appendChild(taskDiv)

    //Após tudo ele deixa o campo em branco    
    taskInput.value = ""

    //Ao clicar nas tarefas ela fica cinza 
    taskDiv.addEventListener("click", function () {
        taskDiv.className = "class-styleJss__check"
        taskDiv.value = ""
    })


    
    

})



//FASE 3 - EXCLUIR TUDO DA LISTA 
    // deleteButton.addEventListener("click" , function(E){
    // E.preventDefault()
    //     taskDiv.remove()
    
    //  })
    