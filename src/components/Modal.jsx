import "../styles/components/Modal.css";

export default function Modal({
  onClose,
  children, // 모달 내부 내용 props로 전달
}) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop" onClick={onClose} />
      <div
        className="modal-container"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
