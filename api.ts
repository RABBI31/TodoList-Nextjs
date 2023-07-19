import { ITodos } from "@/types/todos"

const baseUrl = 'http://localhost:3001'


export const getAllTodos = async (): Promise<ITodos[]> => {
    const response = await fetch(`${baseUrl}/todos`, {cache: 'no-store'});
    const data = await response.json(); // added semicolon here
    console.log(data);
    return data;
  }
  export const addTodos = async (todo : ITodos): Promise<ITodos> =>{
    const response = await fetch(`${baseUrl}/todos`,
    {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(todo)
    }
    );
    const newTodo = await response.json(); // added semicolon here
    return newTodo;
  }
  export const editTodo = async (todo : ITodos): Promise<ITodos> =>{
    const response = await fetch(`${baseUrl}/todos/${todo.id}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(todo)
    }
    );
    const updatedTodo = await response.json(); // added semicolon here
    return updatedTodo;
  }

  export const deleteTodo = async (id : string): Promise<void> =>{
    const response = await fetch(`${baseUrl}/todos/${id}`,
    {
        method: 'DELETE',
    });
   }