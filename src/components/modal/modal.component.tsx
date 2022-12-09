import React, { useEffect, useMemo } from "react";
import "./modal.styles.css";
import { createPortal } from "react-dom";

const modalRootElement = document.querySelector("#modal");

type TModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  children?: React.ReactElement;
  contentClassName?: string;
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

// type TModalProps = {
//     editIsOpen: boolean;
//     previewCard?: TCardData | null;
//     setPopupClose: () => void;
//     children?: React.ReactElement;
// }

{
  /* <div className={`popup popup_edit ${props.editIsOpen ? 'popup_active' : ''}`}>
<div className="popup__overlay"></div>
<div className="popup__content">
<div className="popup__title">not that</div>
<img className="popup__img" src={props.previewCard?.url}/>
<button className="popup__close opacity" onClick={props.setPopupClose}></button>
</div>
</div> */
}
