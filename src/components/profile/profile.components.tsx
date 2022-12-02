import React from 'react'
import './profile.styles.css'
import './../opacity/opacity.styles.css'
import jepa from './../../images/jepa.jpg'

type THeaderProps = {
    editSetIsOpen: () => void;
    addSetisOpen: () => void;
}

export function Profile(props: THeaderProps) {
    return (
        <section className="profile profile_active">
            <img className="profile__avatar" src={jepa}/>
            <div className="profile__info">
                <div className="profile__title">
                    <h1 className="profile__name">заглушка</h1>
                    <button className="profile__edit opacity" onClick={props.editSetIsOpen}></button>
                </div>
                <h2 className="profile__subtitle">заглушковать</h2>
            </div>
            <button className="profile__add opacity" onClick={props.addSetisOpen}></button>
        </section>
    )
}