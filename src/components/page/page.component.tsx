import React from 'react';
import './page.styles.css'

type ContainerProps = {
    children: React.ReactNode;
  };

export function Page(props: ContainerProps) {
    return <div className='page'>{props.children}</div>
}