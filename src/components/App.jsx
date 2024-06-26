import React from 'react';
import Menu from './MenuComponents/Menu';
import Header from './MainPageComponents/Header';
import Main from './MainPageComponents/Main';
import './Style.css';
import Footer from './FooterComponents/Footer';
import ThirdPage from './OrderPageComponents/ThirdPage';

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

      <div className="page three">
        <ThirdPage />
      </div>

      <div className="four">
      <Footer/>
      </div>

    </div>
  );
}

export default App;
