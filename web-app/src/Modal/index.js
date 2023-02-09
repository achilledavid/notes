import { ModalContainer } from "./ModalStyle";
import { Button } from "../Button/ButtonStyle";

const Modal = ({ changeStatus, onConfirm }) => {
    return (
        <ModalContainer>
            <div className="modal__container">
                <h1>
                    Êtes-vous sûr de vouloir supprimer
                    la note ?
                </h1>
                <div className="buttons">
                    <Button onClick={() => { onConfirm(); changeStatus("") }}>Oui</Button>
                    <Button onClick={() => changeStatus("")}>Non</Button>
                </div>
            </div>
        </ModalContainer>
    )
}

export default Modal;