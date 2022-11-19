import React from 'react';
import './App.css';
import { Page } from './components/page/page.component';
import { Header } from './components/header/header.component';
import { Content } from './components/content/content.components';
import { Element } from './components/element/element.components'
import { Elements } from './components/elements/elements.components'
import { Footer } from './components/footer/footer.components';
import { Profile } from './components/profile/profile.components';


function App() {
  return (
    <Page>
      <Header/>
      <Content>
        <Profile/>
        <Elements>
          <Element/>
        </Elements>
      </Content>
      <Footer/>
    </Page>
  );
}

export default App;
