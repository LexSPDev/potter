import { useModal } from "../../hooks/useModal";
import { Modal } from "../modal/Modal"

export const Add = () => {
  const[isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <>
    <button className="centerWrapperRow" onClick={openModal}> 
      <span>
        AGREGAR
      </span>
      <i className="ph-user-plus-fill white" ></i>
    </button>

    <Modal isOpen={isOpenModal} closeModal={closeModal}></Modal>
    </>
  )
}
