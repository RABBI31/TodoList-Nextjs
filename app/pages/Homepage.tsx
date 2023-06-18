import { getAllTodos } from "@/api"
import AddTask from "../components/AddTask"
import TodoList from "../components/TodoList"
const HomePage = async () => {
  const tasks = await getAllTodos();
  return (
   <div className=" mt-5 max-w-4xl mx-auto">
     <h1 className="text-xl my-5 flex flex-col gap-4 bold uppercase text-center">Todo List</h1>
     <div className="text-center">
     <AddTask />
     </div>
    
     <TodoList tasks={tasks}/>
   </div>
  )
}

export default HomePage
