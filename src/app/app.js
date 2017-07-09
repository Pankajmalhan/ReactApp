import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../main/main.jsx';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends React.Component {
   render() {
      return (
    <BrowserRouter >
    <Main/>
    </BrowserRouter>
      )
   }
}

ReactDOM.render(<App/>, document.getElementById('app'));