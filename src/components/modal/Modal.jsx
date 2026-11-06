import "../style/Modal.css";

function Modal({ onClose, children }) {
    return (
        <div className="modal modal--open">
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal-container">
                {children}
            </div>
        </div>
    );
}

export default Modal;
