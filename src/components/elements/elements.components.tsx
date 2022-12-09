import React, { useContext, useEffect } from 'react';
import { TCardData } from '../../types';
import { Element } from './../element/element.components';
import './elements.styles.css';
import { CardArrContext } from './../../context';

export function Elements() {
    const cardArr = useContext(CardArrContext);
    return (
        <section className="elements">
            {cardArr.data.map((card: TCardData) => <Element key={card.id} card={card} />)}
        </section>
    )
}