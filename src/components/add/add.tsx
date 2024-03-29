import { useModal } from "../../hooks/useModal";
import { Modal } from "../modal/Modal"

export const Add = ({data, url, setDb}:{data:Array<Object>, url:string, setDb:Function}) => {
  const[isOpenModal, openModal, closeModal] = useModal(false);
  const handleClick = () => {
    openModal()
  }
  return (
    <>
    <button className="centerWrapperRow btnSecond" onClick={handleClick}> 
      <span>
        AGREGAR
      </span>
      <i className="ph-user-plus-fill white" ></i>
    </button>

    <Modal isOpen={isOpenModal} closeModal={closeModal} data={data} url={url} setDb={setDb}></Modal>
    </>
  )
}
