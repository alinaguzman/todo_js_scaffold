var todoApp = {};
var todoItem = {};
function clone(todoItem) {
    var Clone = function() {};
    Clone.prototype = todoItem;
    return new Clone();
}

todoApp.createTask = function(taskFieldInput) {
     var task = clone(todoItem);
     //taskFieldInput = document.getElementById("new-task-field").value;
     todoItem.setTaskText(taskFieldInput);
     todoApp.appendTask(task);
};

todoItem.setTaskText = function(input){
    this.taskName = input;
};

todoApp.appendTask = function(task) {
    var olTag = document.getElementById('todo-items');
    var liTag = document.createElement('li');
    olTag.appendChild(liTag);
    liTag.innerText = task.taskName;
};

window.onload = function(){
    document.getElementById("add-item").onclick = function(event) {
        todoApp.createTask(document.getElementById("new-task-field").value);
    };
};

//Implement the basic add item functionality:
//    - Use the window.onload event to pick out an 'add-item' button
//- Add an onclick event handler that will call a todoApp createTask method and input from the 'new-task-field' field as an argument
//- Implement the todoApp createTask method to:
//    - create a new instance of a todoItem object
//- Use the new task objects setTaskText method to set the task text from the argument
//- call the todoApp appendTask method passing the new task object as an argument
//- Implement the todoApp appendTask method to:
//    - check that the new task name isn't blank
//- call the new task render method that returns a DOM object and append it to the todo-items
//- Implement the necessary todoItem methods:
//    - setTaskText method to set the taskName attribute
//- render method to return an 'li' element with a div for holding the task text