import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state ={
    persons:[
      {id:'1',name:"sandeep", age:"26"},
      {id:'2',name:"kash", age:"25"},
      {id:'3',name:"deepu", age:"24"}
    ],
    showPersons: false,
  }


  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name:"sandeep", age:"26"},
        {name:event.target.value, age:"25"},
        {name:"deepu", age:"24"}
      ] 
    });
  }

  deletePerson=(Index)=> {
    console.log(this.state.persons[Index]);
    const persons=[...this.state.persons];
    persons.splice(Index,1);
    this.setState({persons:persons});
  }

  toggleNames=()=>{
    this.setState({showPersons:!this.state.showPersons});
  }

  

  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person,Index) => {
          return <Person 
          click={()=>this.deletePerson(Index)}
          name={person.name}
          age={person.age}
          key={person.id}/>
        })}
      </div>
    )
    }

    return (
      <div className="App">
        <h1>This is my react app</h1>
        <p>this is crazy man</p>
        <button 
        style={style}
        //onMouseOver={this.switchNameHandler.bind(this,"Sandyyyyyy")} onMouseOut={this.switchNameHandler1}
        onClick={this.toggleNames}
        >Show Names</button>
        {persons}

        </div>
    );
    //return('div', null,'h1','this is a test');
  }
}

export default App;
