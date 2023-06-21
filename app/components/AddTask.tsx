"use client"

import { AiOutlinePlus } from 'react-icons/ai';
import Modal from './Modal';
import { useState } from 'react';
import { addTodos } from '@/api';
import { useRouter } from 'next/navigation';
import {v4 as uuidv4} from 'uuid';
const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleSubmitNewTodo: React.MouseEventHandler<HTMLButtonElement>= 
  async (e) =>{
    e.preventDefault();
    await addTodos ({
      id: uuidv4(),
      text: newTodo,
      done: false,
    })
     setNewTodo("");
     setModalOpen(false);
     router.refresh();
  }
  return (
    <div className="w-full">
        <button onClick={()=> setModalOpen(true)} className="btn btn-primary uppercase">Add Item <AiOutlinePlus size={12} /></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <h3 className='uppercase bolder text-lg'>Add New Todo</h3>
          <form>
            <div className='modal-action'>
            <input 
            value={newTodo}
            onChange={e => setNewTodo( e.target.value)}
            type="text" 
            placeholder="Add Todo" 
            className="input input-bordered input-secondary w-full " />
            </div>
            <button type='button' className='btn uppercase mt-5' onClick={handleSubmitNewTodo} >Add Todo</button>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask