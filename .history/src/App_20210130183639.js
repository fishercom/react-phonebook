import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        { firstName: 'George', lastName: 'Maclain', phoneNumber: '98898989' },
        { firstName: 'Ritha', lastName: 'Bertnard', phoneNumber: '94343532' }
      ]
    };
  }

  renderComponent(){
    switch(this.state.displayedTable) {
      case "Form":
        return <Form info={this.state} />
      default:
        return <List info={this.state} />
    }
  }

  render () {
      return (
          <div>
              { this.renderComponent() }
          </div>
      )
  }
}

export default App;
