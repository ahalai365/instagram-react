import React, { useEffect, useMemo } from "react";
import "./modal.styles.css";
import { createPortal } from "react-dom";

const modalRootElement = document.querySelector("#modal");

type TModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactElement;
  contentClassName?: string;
  notAutorized?: boolean;
};

export function Modal(props: TModalProps) {
  const modal = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    modalRootElement?.appendChild(modal);

    return () => {
      modalRootElement?.removeChild(modal);
    };
  });

  return createPortal(
    <div className={`popup ${props.isOpen ? "popup_active" : ""}`}>
      <div className="popup__overlay" onClick={props.onRequestClose}></div>

      <div
        className={
          props.contentClassName ? props.contentClassName : "popup__content"
        }
      >
        {props.children}

        <button
          className="popup__close opacity"
          onClick={props.onRequestClose}
        ></button>
      </div>
    </div>,
    modal
  );
}