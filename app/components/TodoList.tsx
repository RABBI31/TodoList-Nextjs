"use client"
import { ITodos } from "@/types/todos";
import React, { useState } from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITodos[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [doneTasks, setDoneTasks] = useState<ITodos[]>([]);

  const markTaskAsDone = (id: string) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;

      if (updatedTasks[taskIndex].done) {
        const doneTask = updatedTasks.splice(taskIndex, 1)[0];
        setDoneTasks([...doneTasks, doneTask]);
      } else {
        const doneTaskIndex = doneTasks.findIndex((task) => task.id === id);
        if (doneTaskIndex !== -1) {
          const updatedDoneTasks = [...doneTasks];
          updatedDoneTasks.splice(doneTaskIndex, 1);
          setDoneTasks(updatedDoneTasks);
        }
      }
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Done</th>
              <th className="text-center">Todo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Task key={task.id} task={task} markAsDone={markTaskAsDone} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
