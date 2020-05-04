import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Webshop } from './components/Webshop';

function App() {
  return (
    <div className="App">
      <Header />
      <Webshop />
      <Footer />
    </div>
  );
}

export default App;
