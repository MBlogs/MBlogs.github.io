import React, {Component} from 'react'
import Table from './Table.js'
import Form from './Form.js'

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    // ES6 method to retrieve state.
    const {characters} = this.state

    // this.SetState built in method for manipulating state.
    this.setState({
      // Filter array based on index and return new array. returns all but i
      characters: characters.filter((character, i) => {
        return i != index
      }),
    })
  }

  handleSubmit = (character) => {
    // The ... is Spread syntax. Similar to Python myList**
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const {characters} = this.state
    
    // Pass through the state and function to remove rows from state.
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

export default App