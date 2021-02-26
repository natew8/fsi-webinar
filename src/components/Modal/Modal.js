import React, { useContext } from "react";
import { Context } from "../context/WebinarContext";
import modalStyles from "./modal.module.scss";
import ModalA from "./ModalA";
import ModalB from "./ModalB";

function Modal(props) {
  const { closeModal, modal } = props;
  const { modalA } = useContext(Context);

  function handleCloseModal(e) {
    e.stopPropagation();
    closeModal();
  }

  const divStyle = {
    display: modal ? "flex" : "none",
  };

  return (
    <div
      aria-hidden="true"
      style={divStyle}
      onClick={handleCloseModal}
      className={modalStyles.modal}
    >
      {modalA ? (
        <ModalA closeModal={closeModal} />
      ) : (
        <ModalB closeModal={closeModal} />
      )}
    </div>
  );
}

export default Modal;
