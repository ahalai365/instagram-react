import React from 'react';
import './elements.styles.css';

type TContainerProps = {
    children: React.ReactNode;
};

export function Elements(props: TContainerProps) {
    return (
        <section className="elements">{props.children}</section>
    )
}