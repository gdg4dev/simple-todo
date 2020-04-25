$('document').ready(() => {
        // disable selection
        $('document').prop('disabled', 'disabled');
        // gets the list of todos fetches from api
        getTodos()
            // add a new note to database
        $('#todoInput').keypress((e) => {
                if (e.which == 13) {
                    addNewTodo()
                }
            })
            // removes todo note 
        $('.list').on('click', 'span', function(e) {
                e.stopPropagation()
                removeTodo.apply(this)
            })
            // completes the task
        $('.list').on('click', 'li', function() {
            completeTodo.apply(this)
        })
    })
    //fetches todo list
const getTodos = () => {
        $.getJSON("/apis/todos")
            .then((data) => {
                listTodos(data)
            })
            .catch(() => {
                listTodos([{ err: 'Something Went Wrong!' }])
            });
    }
    //creates <li> for each todo
const listTodos = (fetchedData) => {
        fetchedData.forEach(todo => {
            const Todos = todo.err ? $("<li class='task'>" + todo.err + "</li>") : (todo.completed ? $("<li class='task done' data-completed=" + todo.completed + " data-id=" + todo._id + ">" + todo.name + "<span>X</span> </li>") : $("<li class='task' data-completed=" + todo.completed + " data-id=" + todo._id + ">" + todo.name + "<span>X</span> </li>"));
            $('.list').append(Todos);
        });
    }
    //adds a new todo to db
const addNewTodo = () => {
        const userTodoInput = $('#todoInput').val();
        $.post("/apis/todos", { name: userTodoInput })
            .then(() => {
                $('.list').empty();
                getTodos()
            })
    }
    //removes a todo from db 
const removeTodo = function() {
        $.ajax({
                type: "delete",
                url: "/apis/todos/" + $(this).parent().attr("data-id")
            })
            .then(d => {
                $('.list').empty();
                getTodos()
            })
    }
    //complete todos
const completeTodo = function() {
    const isDone = ($(this).attr("data-completed"))
    const data = { completed: (!(!!isDone && ['1', 'true', 1, true].indexOf(isDone.toLowerCase()) > -1)) }
        //  let updatedData = { done: isDone }
    $.ajax({
            type: "put",
            url: "/apis/todos/" + $(this).attr("data-id"),
            data
        })
        .then(d => {
            $('.list').empty();
            getTodos()
        })
}