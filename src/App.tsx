import React, { useEffect, useState } from "react";
import "./App.css";

import { api } from "./javascript/utils/api";

import { TCardData, TProfileData } from "./types";
import { Page } from "./components/page/page.component";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.components";
import { Elements } from "./components/elements/elements.components";
import { Footer } from "./components/footer/footer.components";
import { Profile } from "./components/profile/profile.components";
import { ProfileDataContext, CardArrContext } from "./context";

function App() {
  const [cardsArr, setCardsArr] = useState<Array<TCardData>>([])
  const [profileData, setProfileData] = useState<TProfileData>({
    name: "Заглушка",
    description: "Заглушка",
  });

  useEffect(() => {
    api.getAllcards().then((response) => {
      if (response) {
        setCardsArr(response);
      }
    });
  }, []);

  function onLikeCard(cardId: TCardData["id"]) {
    const newCards = cardsArr.map((card: TCardData) => {
      if (card.id !== cardId) {
        return card;
      }
      return {
        ...card,
        isLiked: !card.likes,
      };
    });

    setCardsArr(newCards);
  }

  return (
    <ProfileDataContext.Provider
      value={{
        data: profileData,
        setData: (data) => {
          setProfileData(data);
        },
      }}
    >
      <CardArrContext.Provider
        value={{
          data: cardsArr,
          setCardsArr: (data) => {
            setCardsArr(data);
          },
        }}
      >
        <Page>
          <Header />
          <Content>
            <Profile />
            <Elements />
          </Content>
          <Footer />
        </Page>
      </CardArrContext.Provider>
    </ProfileDataContext.Provider>
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
