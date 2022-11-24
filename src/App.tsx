import React, { useEffect, useState } from 'react';
import './vendor/reset.css';
import './vendor/normalize.css';
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

function Preview(props: any) {
  if (true) {
    return <div>123213</div>
  } else {
    return null;
  }
}

function App() {
  const [cardsArr, setCardsArr] = useState<Array<TCardData>>([]);
  const [previewCard, setPreviewCard] = useState<TCardData | void>();

  useEffect(() => {
    api.getAllcards().then((cards) => {
      setCardsArr(cards);
    });
  }, []);


  // <Elements cards={cardsArr} onLike={onLikeCard} />
  // function onLikeCard(cardId: TCardData['id']) {
  //   const newCards = cardsArr.map((card: TCardData) => {
  //     if (card.id !== cardId) {
  //       return card;
  //     }
  //     return {
  //       ...card,
  //       isLiked: !card.isLiked
  //     }
  //   });

  //   setCardsArr(newCards);
  // }

  // function onPreview(cardData: TCardData): void {
  //   setPreviewCard(cardData);
  // }

  // const [isOpen, setIsOpen] = useState<boolean>(true);
  // function handleRequestClose() {
  //   setIsOpen(false)
  // }

  // const [count, setCount] = useState<number>(5);
  // function upCount() {
  //  let newCount = count + 1;
  //  setCount(newCount);
  // }

  // <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
  //   <form>LogIn</form>
  // </Modal>
  // <Modal count={count} upCount={upCount}>
  //   <form>Счетчик</form>
  // </Modal>

  return (
    <Page>
      <Preview card={previewCard} onClose={function() {}} />
      
      <Header/>
      <Content>
        <Profile/>
        <Elements cards={cardsArr} />
      </Content>
      <Footer/>
    </Page>
  );
}

export default App;
