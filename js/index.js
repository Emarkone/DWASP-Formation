





function addTodoTag(textTodo) {

    const todoTag = document.createElement('div');
    const todoText = document.createElement('p');
    const todoButton = document.createElement('button');

    todoTag.className = "todo";
    todoButton.className = "todo-button";

    todoText.innerHTML = textTodo;
    todoButton.innerHTML = "×";
    todoTag.appendChild(todoText);
    todoTag.appendChild(todoButton);

    todoButton.addEventListener('click', function() {
        this.parentNode.remove();
    }, false);

    document.querySelector('.todo-list').appendChild(todoTag);
}

document.addTodoTab.addEventListener('submit', function(e) {
    e.preventDefault();
    addTodoTag(this.todoText.value);
    this.reset();
});