import { useModal } from "../../hooks/useModal";
import { Modal } from "../modal/Modal"

export const Add = ({data, url, setDb}) => {
  const[isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <>
    <button className="centerWrapperRow" onClick={openModal}> 
      <span>
        AGREGAR
      </span>
      <i className="ph-user-plus-fill white" ></i>
    </button>

    <Modal isOpen={isOpenModal} closeModal={closeModal} data={data} url={url} setDb={setDb}></Modal>
    </>
  )
}
