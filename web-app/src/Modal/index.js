import { ModalContainer } from "./ModalStyle";
import { Button } from "../Button/ButtonStyle";

const Modal = ({ changeStatus, onConfirm }) => {
    return (
        <ModalContainer>
            <div className="modal__container">
                <h1>
                    Are you sure you want to delete the note?
                </h1>
                <div className="buttons">
                    <Button onClick={() => { onConfirm(); changeStatus("") }}>Yes</Button>
                    <Button onClick={() => changeStatus("")}>No</Button>
                </div>
            </div>
        </ModalContainer>
    )
}

export default Modal;