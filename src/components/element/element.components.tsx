import React, { useEffect, useState } from 'react';
import card from './../../images/jepa.jpg';
import trashBasket from './../../images/trash-basket.png';
import dislike from './../../images/dislike.png';
import './element.components.css';
import { TCardData } from '../../types';

type TElementProps = {
    card: TCardData;
    // onLike: (cardId: TCardData['id']) => void;
}

export function Element(props: TElementProps) {
    // const [isLiked, setIsLiked] = useState(false);

    // useEffect(() => {
    //     console.log('elem effect')
    //     if (!isLiked) {
    //         return;
    //     }
    //     console.log('Like clicked');
    // }, [isLiked]);

    // function handleLike() {
    //     props.onLike(props.card.id);
    // }

    return (
        <div className="element">
            <img className="element__img" src={card}/>
            <img className="element__delete" src={trashBasket}/>
            <div className="element__footer">
                <h3 className="element__title">{props.card.title}</h3>
                <span className="element__count">0</span>
                <img className={`element__like opacity`} src={dislike}/>
            </div>
        </div>    
    )
}

{/* <img className={`element__like opacity ${props.card.isLiked ? 'element__like_active' : ''}`} onClick={handleLike} src={dislike}/> */}