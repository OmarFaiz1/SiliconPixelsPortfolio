import React, { useState } from " react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="open-modal-btn">
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <button className="close-modal-btn" onClick={closeModal}>
              Close
            </button>
            <h1>Modal Title</h1>
            <div className="modal-content">
              This is the content of the modal.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

// CSS styles
const styles = `
.modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-wrapper {
  width: 300px;
  height: 200px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
}

.open-modal-btn, .close-modal-btn {
  padding: 10px;
  background: slateblue;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.modal-content {
  margin-top: 20px;
}

@media (max-width: 600px) {
  .modal-wrapper {
    width: 90%;
    height: auto;
  }
}
`;

// Append styles to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
