import { prependOnceListener } from 'process';
import React, { ReactElement } from 'react';
import './modal.styles.css';

type TElementsProps = {
  // isOpen: boolean;
  // onRequestClose: () => void;
  children: ReactElement;

  count: number;
  upCount: () => void;
};

export function Modal(props: TElementsProps) {
  function handleClick() {
    // props.onRequestClose()
    props.upCount();
  }

  // if (!props.isOpen) {
  //   return null
  // }
  return <div className="popup popup_edit">
    <button onClick={handleClick}>{props.count}</button>
    {props.children}
          </div>
}