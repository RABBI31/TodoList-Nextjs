import React from "react";

interface ModalProps{
    modalOpen : boolean,
    setModalOpen: (open : boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<ModalProps>  = ({modalOpen, setModalOpen , children}) => {
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}

      <dialog className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <form method="dialog" className="modal-box">
          <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
         {children}
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
