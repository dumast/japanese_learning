import React from 'react';
import './App.scss';
import Home from './pages/Home'
import Hiragana from './pages/Hiragana'
import Katakana from './pages/Katakana'
import _hiragana from './pages/_hiragana';
import _katakana from './pages/_katakana';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path = "/" component={Home}/>
      <Route exact path = "/hiragana" component={Hiragana}/>
      <Route exact path = "/hiragana/:id" component={_hiragana}/>
      <Route exact path = "/katakana" component={Katakana}/>
      <Route exact path = "/katakana/:id" component={_katakana}/>
    </Switch>
  );
}

export default App;
