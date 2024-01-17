import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
