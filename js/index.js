
function addTodoTag(textTodo, index) {

    const todoTag = document.createElement('div');
    const todoText = document.createElement('p');
    const todoButton = document.createElement('button');

    todoTag.className = "todo";
    todoButton.className = "todo-button";
    todoButton.setAttribute("id-todo", index);

    todoText.innerHTML = textTodo;
    todoButton.innerHTML = "×";

    todoTag.appendChild(todoText);
    todoTag.appendChild(todoButton);

    todoButton.addEventListener('click', function() {
        delete todos[this.getAttribute("id-todo")];
        this.parentNode.remove();
        updateLocalStorage();
    }, false);

    document.querySelector('.todo-list').appendChild(todoTag);
}

function updateLocalStorage() {
    if (window.localStorage) {
        localStorage.setItem(KEY_TODO, JSON.stringify(todos));
    }
}


let gIndex = 0;
let todos = new Object();
const KEY_TODO = "todos";

document.addEventListener('DOMContentLoaded', () => {
    if(window.localStorage) {
        if(window.localStorage.getItem(KEY_TODO)) {
            const todosText = localStorage.getItem(KEY_TODO);
            todos = JSON.parse(todosText);
            for(var index in todos) {
                var todo = todos[index];
                addTodoTag(todo, index);
            }
        }
    }
});

document.addTodoTab.addEventListener('submit', function(e) {
    e.preventDefault();

    const text = this.todoText.value;

    if(text.length < 5) {
        return;
    }

    while (todos[gIndex]) {
        gIndex++;
    }

    todos[gIndex] = text;

    addTodoTag(text, gIndex);

    updateLocalStorage();

    this.reset();
});