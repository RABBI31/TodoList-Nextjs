"use client"
import { ITodos } from "@/types/todos"
import { AiFillEdit} from "react-icons/ai"
import {BsTrashFill} from 'react-icons/bs'
import Modal from './Modal';
import React, { useState } from "react"
import { useRouter } from 'next/navigation';
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task : ITodos
}
const Task: React.FC<TaskProps>= ({task}) => {
  const router = useRouter();
  const [openModalEdit, setopenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setopenModalDeleted] = useState<boolean>(false);
  const [todoEdit, setTodoEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: React.MouseEventHandler<HTMLButtonElement>= 
  async (e) =>{
    e.preventDefault();
    await editTodo ({
      id: task.id,
      text: todoEdit
    })
     setopenModalEdit(false);
     router.refresh();
  }
  const handleDeleteTodo = async (id: string) =>{
    await deleteTodo(id);
      setopenModalDeleted(false);
      router.refresh();
    }
  
  return (
    <tr key={task.id}>
    {/* <td>{task.id}</td> */}
    <td className="w-full">{task.text}</td>
    <td className="flex">
      <AiFillEdit onClick={() => setopenModalEdit(true)} cursor="pointer" color="blue" size={25}  />
      <Modal modalOpen={openModalEdit} setModalOpen={setopenModalEdit}>
          <h3 className='uppercase bolder text-lg text-center'>Edit Todo</h3>
          <form className="text-center">
            <div className='modal-action'>
            <input 
            value={todoEdit}
            onChange={e => setTodoEdit( e.target.value)}
            type="text" 
            placeholder="Edit Todo" 
            className="input input-bordered input-secondary w-full " />
            </div>
            <button type='button' className='btn uppercase mt-5 text-center' onClick={handleSubmitEditTodo} >Edit Todo</button>
          </form>
        </Modal>
      <BsTrashFill onClick={() => setopenModalDeleted(true)} cursor="pointer" color="red" size={25} className="ml-5" />
      <Modal modalOpen={openModalDeleted} setModalOpen={setopenModalDeleted}>
          <h3 className='uppercase bolder text-lg text-center'>Are you sure, you want to delete this Todo</h3>
          <form className="text-center">
            <div className='modal-action'>
            <button type='button' className='btn uppercase mt-5 text-center' onClick={() => handleDeleteTodo(task.id)} >Yes</button>
            </div>
          </form>
        </Modal>
    </td>
  </tr>
  )
}

export default Task