import { getAllTodos } from "@/api"
import AddTask from "../components/AddTask"
import TodoList from "../components/TodoList"
import Footer from "../components/includs/Footer";
const HomePage = async () => {
  const tasks = await getAllTodos();
  return (
    <div className="flex flex-col min-h-screen">
   <main className="flex-grow mt-5 max-w-6xl mx-auto">
     <h1 className="text-xl my-5 flex flex-col gap-4 bold uppercase text-center">Todo List</h1>
     <div className="text-center">
     <AddTask />
     </div>
     <TodoList tasks={tasks}/>
   </main>
    <footer>
    <Footer />
   </footer>
   </div>
  )
}

export default HomePage
