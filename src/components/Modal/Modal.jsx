import React, { useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({
  message,
  confirmText,
  cancelText,
  modalActive,
  closeModal,
  onConfirm,
  onCancel,
  backgroundColor,
  modalStyle,
}) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  backgroundColor = {
    width: "1000px",
    height: "200px",
  };
  confirmText = "Confirmer"; //bouton
  cancelText = "Annuler"; //bouton
  message = "Salut à tous !"; //message modale

  modalActive = true; // true false pour activer la modale ou non
  // const background = {
  //   display: modalActive ? "flex" : "none",
  //   backgroundStyle,
  // };
  // modalStyle = {
  //   width: "1000px",
  //   height: "200px", // style de la modale
  // };

  return (
    <div>
      <div className={styles.main} onClick={closeModal} style={backgroundColor}>
        <div
          className={styles.modalContainer}
          onClick={stopPropagation}
          style={modalStyle}
        >
          <p>{message}</p>
          <div className={styles.buttons}>
            <button className={styles.buttonConfirm} onClick={onConfirm}>
              {confirmText}
            </button>
            <button className={styles.buttonCancel} onClick={onCancel}>
              {cancelText}
            </button>
          </div>
          <div className={styles.closeButton} onClick={closeModal}></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
