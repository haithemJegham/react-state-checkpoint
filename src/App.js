/* import React, { Component } from 'react'
import haithem from './haithem.jpg'

const Person = {
  fullName: "haithem Jegham",
  imgSrc:{}
  bio: {38},
  profession:'Web-developer',
} 



export default class App extends Component {
  constructor ()
  {
    super();
    this.state= {Person {
      fullName: "haithem Jegham",
      imgSrc: {haithem},
      bio: 38,
      profession:'Web-developer',

    }
  }
  render() {
    return (
      <div>
        <h1>{this.person.state.fullName}</h1>
        <h1>{this.person.state.imgSrc}</h1>
        <h1>{this.person.state.bio}</h1>
        <h1>{this.person.state.profession}</h1>
      </div>
    )
  }
} */

import React from 'react';
import './App.css';
import Profile from './P  rofile.js'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currentCount:0
        ,shows: false,
  text:'show',
    }
    this.handleClick=()=>{this.setState({shows:!this.state.shows});
    this.setState({currentCount:0})
   
    
  if(this.state.shows){this.setState({text:'show'})}
  else{this.setState({text:'hide'})
  }}
}

timer=()=> {
    this.setState({
      currentCount: this.state.currentCount + 1
    })

}
componentDidMount=()=> {
    this.intervalId = setInterval(this.timer, 1000);
}


  render() {
    return(
      
      <div>
        <div className='profile'>
      {this.state.shows && <Profile/>}
            <button onClick={this.handleClick} >{this.state.text}</button>
            <h1>{this.state.currentCount}</h1>
            </div>
       
       </div>
    )}}

export default App;