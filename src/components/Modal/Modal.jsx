import styles from "./Modal.module.scss";

const Modal = ({
  modalText,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  closeModal,
  backgroundStyle,
  modalStyle,
}) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  //message modale
  modalText = modalText || "Souhaitez-vous valider le formulaire?";

  //Button
  // onConfirm,

  //Button
  // onCancel,

  // backgroundStyle
  backgroundStyle = backgroundStyle || { display: "none" };

  //Text bouton
  confirmText = confirmText || "Confirmer";
  //Text bouton
  cancelText = cancelText || "Annuler";

  // modalStyle

  return (
    <div>
      <div className={styles.main} onClick={closeModal} style={backgroundStyle}>
        <div
          className={styles.modalContainer}
          onClick={stopPropagation}
          style={modalStyle}
        >
          <p>{modalText}</p>
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
