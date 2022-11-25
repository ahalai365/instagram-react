import React from 'react';
import { isPropertySignature } from 'typescript';
import logo from './../../images/logo.png'
import './header.styles.css';

type THeaderProps = {
    setPopupOpen: () => void;
}

export function Header(props: THeaderProps) {
    return <header className="header">
    <img className="logo" src={logo} />
    <div className="account">
        <a className="account__sign-in opacity account_active" onClick={props.setPopupOpen}>Вход</a>
        <a className="account__auth"></a>
        <span>&nbsp;/&nbsp;</span>
        <a className="account__registration opacity account_active" onClick={props.setPopupOpen}>Зарегистрироваться</a>
        <a className="account__exit opacity">Выход</a>
    </div>
</header>
}