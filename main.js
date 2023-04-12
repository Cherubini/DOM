'use strict'

// console.log(document.body);
// const pippoTag = document.getElementById('pippo')
// console.log(pippoTag);
// const mainDiv = document.getElementById('main-div');
// const newP = document.createElement('p');
// const text = document.createTextNode('attento la pizza mangia te');
// newP.appendChild(text);
// mainDiv.appendChild(newP);

const toDos= ['ripassare HTML', 'studiare javascript', 'esercitarmi su codewars', 'fare la scacchiera', 'fare il fizzBuzz']
const elementToExpand=document.getElementById('main-list')

function displayList(array) {
    document.getElementById('main-list').innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const doneButton = document.createElement('button');
        const doneButtonText = document.createTextNode('cancella');
        doneButton.appendChild(doneButtonText); 
        doneButton.addEventListener('click', (event)=>removeToDo(element));

        const newLi = document.createElement('li');
        const newText = document.createTextNode(element)
        newLi.appendChild(newText);
        newLi.appendChild(doneButton);
        elementToExpand.appendChild(newLi);
    }
}

displayList(toDos);


function addButtonList() {
    const input=document.getElementById('todo-input');
    const newToDo= input.value;
    toDos.push(newToDo);
    displayList(toDos);
}

function removeToDo(todo) {
    const toDoindex= toDos.indexOf(todo);
    toDos.splice(toDoindex,1);
    displayList(toDos);
}