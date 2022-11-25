import React from "react";
import { isPropertySignature } from 'typescript';
import './modal.styles.css';

type TModalProps = {
    isOpen: boolean;
    setPopupClose: () => void;
}

export function Modal(props: TModalProps) {
    return (
        <div className={`popup popup_edit ${props.isOpen ? 'popup_active' : ''}`}>
            <div className="popup__overlay"></div>
            <div className="popup__content">
                <div className="popup__title">PopupName</div>

                <button className="popup__close opacity" onClick={props.setPopupClose}></button>
            </div>
        </div>
    )
}