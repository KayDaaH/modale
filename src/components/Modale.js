import React from "react";

function Modale({
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  style,
}) {
  const handleConfirm = () => {
    console.log("handleConfirm");
  };

  const handleCancel = () => {
    console.log("handleCancel");
  };

  message = "Êtes-vous sûr de vouloir valider le formulaire ????";
  confirmText = "Confirmer";
  cancelText = "Annuler";
  onConfirm = handleConfirm;
  onCancel = handleCancel;
  style = { backgroundColor: "lightblue", color: "black" };

  return (
    <div className="modal" style={style}>
      <p>{message}</p>
      <button onClick={onConfirm}>{confirmText}</button>
      <button onClick={onCancel}>{cancelText}</button>
    </div>
  );
}

export default Modale;
