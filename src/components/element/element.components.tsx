import React, { useEffect, useState } from 'react';
import trashBasket from './../../images/trash-basket.png';
import dislike from './../../images/dislike.png';
import './element.components.css';
import { TCardData } from '../../types';

type TElementProps = {
    card: TCardData;
    onLike: (cardId: TCardData['id']) => void;
    onPreview: (card: TCardData) => void;
}

export function Element(props: TElementProps) {
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (!isLiked) {
            return;
        }
    }, [isLiked]);

    function handleLike() {
        props.onLike(props.card.id);
    }

    function handlePreview(): void {
        props.onPreview(props.card)
    }

    return (
        <div className="element">
            <img className="element__img" src={props.card.url} onClick={handlePreview} />
            <img className="element__delete" src={trashBasket}/>
            <div className="element__footer">
                <h3 className="element__title">{props.card.title}</h3>
                <span className="element__count">0</span>
                <img className={`element__like opacity ${props.card.likes ? 'element__like_active' : ''}`} onClick={handleLike} src={dislike}/>
            </div>
        </div>    
    )
}