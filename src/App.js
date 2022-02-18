import React from 'react';
import Header from './components/Header';
import Home from './components/Home';

import {GlobalStyle} from "./GlobalStyle";
import 'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
