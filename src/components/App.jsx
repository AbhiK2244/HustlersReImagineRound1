import React from 'react';
import Menu from './MenuComponents/Menu';
import Header from './MainPageComponents/Header';
import Main from './MainPageComponents/Main';
import './Style.css';

function App() {
  return (
    <div className='app-container'>
      <div className='page one'>
        <Header />
        {" " }
        <Main />
      </div>
      <div className='page two'>
        <Menu />
      </div>
    </div>
  );
}

export default App;
