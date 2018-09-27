/*clicar e add uma tarefa embaixo> limpar o campo da tarefa> clicar no botao e excluir a tarefa>*/
/*pegar input criar um p e colocar o ele dentro> pegar o p e colocar dentro de uma div>
/*deletar a tarefa quando  clicar o botão de excluir */
const input = document.getElementById("taskInput")
const taskBox = document.getElementById("taskBox")
const form = document.querySelector(".task-composer__form")
const deleteButton = document.getElementById("deleteButton")
const button = document.getElementById("inputBtn")
const divstylebox = document.querySelector("divstylebox")

form.addEventListener("onsubmit", function (eve) {
    eve.preventDefault()
})


button.addEventListener("click", function (event) {
    event.preventDefault()


    //Validar o campo se estiver nulo ou as outras variaveis
    //Trim remove os espaços necesários 

    if (input.value === "" || input.value.length === 0 || !input.value.trim() || input.value === " " || input.value === null || input.value === undefined) {
        input.focus()
        return false
    }




    const taskDiv = document.createElement("div")
    taskDiv.className = "taskdivclasse"
    const task = document.createElement("p")


    //Criado div para colocar botao de excluir, dps deu uma classe e por ultimo criou no html
    const btnDeleteTask = document.createElement("div")
    btnDeleteTask.className = "btnDeleteTask"
    btnDeleteTask.innerHTML = ` x `


    //Botao excluir tarefas 
    btnDeleteTask.addEventListener("click", function (eventdelete) {
        eventdelete.preventDefault()
        taskDiv.remove()
    })

    task.innerHTML = taskInput.value
    taskDiv.appendChild(btnDeleteTask)
    taskDiv.appendChild(task)
    taskBox.appendChild(taskDiv)

    //Após tudo ele deixa o campo em branco    
    taskInput.value = ""

    //Ao clicar nas tarefas ela fica cinza 
    taskDiv.addEventListener("click", function (eventclass) {
        eventclass.preventDefault()
        task.className = "class-styleJss__check"
        // taskDiv.value = ""
    })
    
    // drag and drop 
    let dragging
    taskDiv.addEventListener("drag", function (ev) {
        ev.preventDefault()
    })

    taskDiv.addEventListener("dragover", function (ev) {

        dragging = ev.target.dragging
        function allowDrop(ev) {
            ev.preventDefault()
        }
    })

    taskDiv.addEventListener("dragstart", function (ev) {

        id = ev.target.taskdivclasse

    })

    taksDiv.addEventListener("drop", function (ev) {
        ev.target.append(document.getElementById(class))
    })

    // FASE 3 - MARCAR TODOS OS ITENS COMO FEITO
    const checkButton = document.getElementById("checkButton")
    checkButton.addEventListener("click", function (eventcheck) {
        eventcheck.preventDefault()
        task.className = "class-styleJss__check"
        // taskDiv.value = ""
    })

    //FASE 3 - EXCLUIR TUDO DA LISTA 
    deleteButton.addEventListener("click", function (E) {
        E.preventDefault()
        taskDiv.remove()

    })




})

// var id;

// function allowDrop(ev) {
//     ev.preventDefault()
// }

// function dragStart(ev) {

//     id = ev.target.id

// }

// function drop(ev) {
//     ev.target.append(document.getElementById(id))
// }

// selecionar uma div> arrastar essa div> quando esta div estiver selecionada fora do seu lugar original criar uma div> colocar a primeira div dentro desta div nova ao soltar

// para arrastar de novo> selecionar a primeira div> arrastar ela> no momento que for arrasta "pra fora" exluir essa nova div

// drag = store id or class inside some variable  drop = put that id inside something inside something 
