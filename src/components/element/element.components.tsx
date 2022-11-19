import React from 'react';
import card from './../../images/jepa.jpg';
import trashBasket from './../../images/trash-basket.png';
import dislike from './../../images/dislike.png';
import './element.components.css';

export function Element() {
    return (
        <div className="element">
            <img className="element__img" src={card}/>
            <img className="element__delete" src={trashBasket}/>
            <div className="element__footer">
                <h3 className="element__title"></h3>
                <span className="element__count">0</span>
                <img className="element__like  opacity" src={dislike}/>
            </div>
        </div>    
    )
}