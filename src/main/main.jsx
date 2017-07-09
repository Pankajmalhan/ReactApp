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
       
      <Route exact path='/' component={Home}/>

      <Route path='/details' render={(props) => (
        <Details  data={this.age}/>
        )}/>
     
        <Route path='/aboutus/:id' children={(props) => (
          props.match
            ? <AboutUs data={props.match} />
            : <Details  data={this.age}/>
        )}/>   
      
      </div>
      );
   }
}

export default Main;