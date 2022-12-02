import React, { useEffect, useState } from 'react';
import './App.css';

import { api } from './javascript/utils/api'

import { TCardData } from './types';
import { Page } from './components/page/page.component';
import { Header } from './components/header/header.component';
import { Modal } from './components/modal/modal.component';
import { Content } from './components/content/content.components';
import { Elements } from './components/elements/elements.components'
import { Footer } from './components/footer/footer.components';
import { Profile } from './components/profile/profile.components';

function App() {
  const [cardsArr, setCardsArr] = useState<Array<TCardData>>([]);
  const [editIsOpen, editSetIsOpen] = useState(false);
  const [addIsOpen, addSetIsOpen] = useState(false);
  const [signInIsOpen, signInSetIsOpen] = useState(false);
  const [registerIsOpen, registerSetIsOpen] = useState(false);
  const [previewIsOpen, previewSetIsOpen] = useState(false);
  const [previewCard, setPreviewCard] = useState<TCardData | null>(null);

  function onPreview(card: TCardData): void {
    setPreviewCard(card);
    handleRequestOpen();
  }

  function handleRequestOpen() {
    previewSetIsOpen(true);
  }

  // function handleRequestClose() {
  //   setIsOpen(false);
  // }

  useEffect(() => {
    api.getAllcards().then((response) => {
      console.log(response, 'card response');
      if (response) {
        setCardsArr(response);
      }
      
    });
  }, []);

  function onLikeCard(cardId: TCardData['id']) {
    const newCards = cardsArr.map((card: TCardData) => {
      if (card.id !== cardId) {
        return card;
      }
      return {
        ...card,
        isLiked: !card.likes
      }
    });

    setCardsArr(newCards);
  }
  return (
    <Page>
      <Modal isOpen={editIsOpen} isClose={() => editSetIsOpen(false) }>
        <>
          <div className="popup__title">Редактировать профиль</div>

          <form className="form__edit">   
            <input type="text" name="name"  className="popup__input" placeholder="Укажате имя" />
            <input type="text" name="description" className="popup__input" placeholder="Укажите деятильность" />
            <button name="submitProfile" type="submit" className="popup__submit opacity" disabled>Сохранить</button>
          </form>

          <button className="popup__close opacity" onClick={() => editSetIsOpen(false)}></button>
        </> 
      </Modal>
      <Modal isOpen={addIsOpen} isClose={() => addSetIsOpen(false)}>
        <>
          <div className="popup__title">Добавить место</div>
                    
          <form className="form__add">
            <input type="text" name="title" className="popup__input" placeholder="Укажате название" />
            <input type="url" name="url" className="popup__input" placeholder="Укажите путь" />
            <button name="submitPlace" type="submit" className="popup__submit opacity" disabled>Сохранить</button>
          </form>

          <button className="popup__close opacity" onClick={() => addSetIsOpen(false)}></button>
        </>
      </Modal>
     <Modal isOpen={previewIsOpen} isClose={() => previewSetIsOpen(false)}>
        <>
        {/* <div className="popup__content_view"> */}
          <img className="popup__img" src={previewCard?.url} />
          <button className="popup__close opacity" onClick={() => previewSetIsOpen(false)}></button>
        {/* </div> */}
        </>
      </Modal>
      <Modal isOpen={signInIsOpen} isClose={() => signInSetIsOpen(false)}>
        <>
          <div className="popup__title">Вход</div>
          
          <form className="form__sign-in">
            <input type="email" name="email" className="popup__input" placeholder="Введите e-mail" />
            <input type="password" name="password" className="popup__input" placeholder="Введите пароль" />
            <button name="submitPlace" type="submit" className="popup__sign-in opacity popup__submit" disabled>Войти</button>
          </form>

          <button className="popup__close opacity" onClick={() => signInSetIsOpen(false)}></button>
        </>
      </Modal>
      <Modal isOpen={registerIsOpen} isClose={() => registerSetIsOpen(false)}>
        <>
          <div className="popup__title">Регистрация</div>
                    
            <form className="form__registration">
              <input type="email" name="email" className="popup__input" placeholder="Введите e-mail" />
              <input type="password" name="password" className="popup__input" placeholder="Введите пароль" />
              <input type="password" name="passwordRepit" className="popup__input" placeholder="Повторите пароль" />
              <input type="text" name="name" className="popup__input" placeholder="Введите имя" />
              <input type="text" name="description" className="popup__input" placeholder="Введите профессию" />
              <input type="url" name="avatar" className="popup__input" placeholder="Укажите путь к аватару" />
              <button name="submitPlace" type="submit" className="popup__registration opacity popup__submit" disabled>Зарегистрироваться</button>
            </form>

            <button className="popup__close opacity" onClick={() => registerSetIsOpen(false)}></button>
        </>
      </Modal>
      <Header signInIsOpen={() => signInSetIsOpen(true)} registerIsOpen={() => registerSetIsOpen(true)} />
      <Content>
        <Profile editSetIsOpen={() => editSetIsOpen(true)} addSetisOpen={() =>addSetIsOpen(true)} />
        <Elements cards={cardsArr} onLike={onLikeCard} onPreview={onPreview}/>
      </Content>
      <Footer />
    </Page>
  );
}

export default App;

// function useToggle(initialValue: boolean): [boolean, { enable: () => void; disable: () => void; toggle: () => void }] {
//   const [value, setValue] = useState(initialValue)
  
//   return [value, {
//     enable: () => {setValue(true)},
//     disable: () => {setValue(false)},
//     toggle: () => {setValue(!value)}
//   }];
// }

// const [isOpen, isOpenControls] = useToggle(false);

// <Modal isOpen={isOpen} setPopupClose={isOpenControls.disable}  />
// <Header setPopupOpen={isOpenControls.enable} />
//  <Profile setPopupOpen={isOpenControls.enable} />
