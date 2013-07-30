var todoApp = {
    createTask: function(text){
        var task = clone(todoItem);
        task.setTaskText(text);
        todoApp.appendTask(task);

    },
    getUnfinishedItems: function(){
        return document.getElementById('todo-items');
    },
    getFinishedItems: function() {
        return document.getElementById('completed-items');
    },
    appendTask: function(task){
        this.getUnfinishedItems().appendChild(task.renderNew());
    }

};
var todoItem = {
    setTaskText: function(text){
        this.taskName = text;
    },

    renderNew: function() {
        var liTag = document.createElement('li');
        liTag.innerHTML = this.taskName;
        liTag.appendChild(this.completeButton());
        liTag.appendChild(this.deleteButton());
        return liTag;
    },

    completeButton: function() {
        var button = document.createElement('button');
        button.innerText = "Complete Button";
        button.onclick = function(event) {
            var button = event.target;
            var task = todoApp.getUnfinishedItems().removeChild(this.parentNode);
            button.parentNode.removeChild(button);
            todoApp.getFinishedItems().appendChild(task);
        };
       return button;
    },

    deleteButton: function() {
        var button = document.createElement('button');
        button.innerHTML = "Delete Task";
        button.onclick = function(event) {
            var button = event.target;
            button.parentNode.parentNode.removeChild(this.parentNode)
        };
        return button;
    },

    getTask: function(event) {
        return event.target.parentNode.parentNode.parentNode;
    }

};

function clone(todoItem) {
    var Clone = function() {};
    Clone.prototype = todoItem;
    return new Clone();
}


window.onload = function(){
    document.getElementById("add-item").onclick = function(event) {
        todoApp.createTask(document.getElementById("new-task-field").value);
    };

};


