import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as ToDo;
    logToDo(todo);

});

const logToDo = (todo: ToDo) => {
    console.log(`
        The todo item with id ${todo.id} has a title
        "${todo.title}" and the status is ${todo.completed}
    `);
}