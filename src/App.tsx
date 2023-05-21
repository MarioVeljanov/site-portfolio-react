import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Projects from './components/project/Projects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
type handlePromiseType = {
  promise: null | Promise<string>;
  resolve: null | Promise<string>;
  reject: null | Promise<string>;
  onSuccess: (paramName: any) => void;
  onError: (paramName: any) => void;
};
function App() {

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
