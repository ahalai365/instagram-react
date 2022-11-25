import React from 'react';
import './content.styles.css';

type TContainerProps = {
    children: React.ReactNode;
};

export function Content(props: TContainerProps) {
    return <div className='content'>{props.children}</div>
}