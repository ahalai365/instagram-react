import React from 'react';
import { TCardData } from '../../types';
import { Element } from './../element/element.components'
import './elements.styles.css';

type TElementsProps = {
    cards: Array<TCardData>;
    onLike: (cardId: TCardData['id']) => void;
    onPreview: (card: TCardData) => void;
};

export function Elements(props: TElementsProps) {
    console.log(props, 'cards');
    return (
        <section className="elements">
            {props.cards.map((card: TCardData) => <Element key={card.id} onLike={props.onLike} card={card} onPreview={props.onPreview} />)}
        </section>
    )
}