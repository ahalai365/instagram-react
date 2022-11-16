import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Page } from './components/page/page.component';
import { Header } from './components/header/header.component';
import { Content } from './components/content/content.components';
import { Footer } from './components/footer/footer.components';

function App() {
  return (
    <Page>
      <Header/>
      <Content/>
      <Footer/>
    </Page>
  );
}

export default App;
