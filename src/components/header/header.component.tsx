import React from 'react';
import logo from './../../images/logo.png'
import './header.styles.css';

export function Header() {
    return <header className="header">
    <img className="logo" src={logo} />
    <div className="account">
        <a className="account__sign-in opacity account_active">Вход</a>
        <a className="account__auth"></a>
        <span>&nbsp;/&nbsp;</span>
        <a className="account__registration opacity account_active">Зарегистрироваться</a>
        <a className="account__exit opacity">Выход</a>
    </div>
</header>
}