import React from 'react';
import Header from './Components/Header';
import './App.css'
import Registration from './Components/Registration';
import Login from './Components/Login';
import {BrowserRouter, Route} from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import Navigator from './Components/Navigator';
import Page from './Components/Page';


const App = (props) => {
  return (
    <BrowserRouter>
      <AppRouter/>
      {/* <Header />
      <h1>Рекомендательная система NETFLIX помогает Вам подобрать фильм по нескольким параметрам!</h1> */}
      <Registration />
      <div class='app-wrapper-content'>
        <Route path='/navigator' component={Navigator}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
