import React, {Component} from 'react'
import Table from './Table.js'

class App extends Component {
  render() {
    // Pretend this is coming from somwhere in eg. JSON format.
    const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
        },
        {
          name: 'Mac',
          job: 'Bouncer',
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
        },
        {
          name: 'Dennis',
          job: 'Bartender',
        },
      ]

      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
      )
  }
}

export default App