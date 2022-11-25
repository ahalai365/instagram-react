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

function App() {
  const [cardsArr, setCardsArr] = useState<Array<TCardData>>([]);
  const [previewCard, setPreviewCard] = useState<TCardData | void>();

  function onPreview(cardData: TCardData): void {
    setPreviewCard(cardData);
  }

  const [isOpen, setIsOpen] = useState(false);

  function handleRequestOpen() {
    setIsOpen(true)
  }

  function handleRequestClose() {
    setIsOpen(false)
  }

  useEffect(() => {
    api.getAllcards().then((response) => {
      console.log(response.card)
      setCardsArr(response.card);
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
      {/* <Preview card={previewCard} setPreviewOpen={onPreview} /> */}
      <Modal isOpen={isOpen} setPopupClose={handleRequestClose}  />
      <Header setPopupOpen={handleRequestOpen} />
      <Content>
        <Profile setPopupOpen={handleRequestOpen} />
        <Elements cards={cardsArr} onLike={onLikeCard} />
      </Content>
      <Footer />
    </Page>
  );
}

export default App;
