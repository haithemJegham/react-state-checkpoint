import React from 'react';
import './App.css';
import myimage from './haithem.jpg'

class Profile extends React.Component {
constructor(props){
  super(props);
  this.state= {person:{
    counter: 0,
    name : 'haithem',
    profession :'WD',
    Bio:'worked at Art de Finition ecologique',
    image: myimage
    
  } }}


  render() {
    return (
    <div>
    
    <img src={this.state.person.image} alt='anyimage'/>      
    <h3>full name : {this.state.person.name}</h3>
    <h3>profession : {this.state.person.profession}</h3>
    <p>Biography : {this.state.person.Bio}</p>
    
    

    
    </div>
    ) }
}

export default Profile;