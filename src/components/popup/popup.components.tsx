import React from "react";
import './popup.styles.css';

export function Popup() {
    return (
        <div className="popup popup_edit">
            <div className="popup__overlay"></div>
            <div className="popup__content">
                <div className="popup__title">PopupName</div>

                <button className="popup__close opacity"></button>
            </div>
        </div>
    )
}