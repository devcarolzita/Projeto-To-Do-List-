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

    const taskDiv = document.createElement("div")
    const task = document.createElement("p")
    
    task.innerHTML = taskInput.value
    taskDiv.appendChild(task)
    taskBox.appendChild(taskDiv)

    taskInput.value = ""
    
})

taskInput.addEventListener("click" function(){
    
})


// deleteButton.addEventListener("click" , function(E){
// E.preventDefault()
//     taskDiv.remove()

//  })
