import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import  Details from '../details/details';
import  Home from '../home/home';
import  AboutUs from '../aboutus/aboutus';
import { Switch, Route } from 'react-router-dom'

class Main extends React.Component {
  constructor(){
     super();
     this.age=12000; 
   }
   render() {
          return (
          <div>
           <Header></Header>
       <div className="container">
      <Route exact path='/' component={Home}/>
      <Route exact path='/details' component={Details}/>
      <Route exact path='/aboutus' component={AboutUs}/>
      </div>
      </div>
      );
   }
}

export default Main;