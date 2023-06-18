import { ITodos } from "@/types/todos";
import React from "react";
import Task from "./Task";

interface TodoListProps{
  tasks: ITodos[]
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task =>(
            <Task key={task.id} task={task}/>
             ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
