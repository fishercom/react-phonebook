import React from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: '1', firstName: 'George', lastName: 'Maclain', phoneNumber: '98898989' },
        { id: '2', firstName: 'Ritha', lastName: 'Bertnard', phoneNumber: '94343532' }
      ],
      displayedTable: 'List'
    };
  }

  renderComponent(){
    switch(this.state.displayedTable) {
      case "Form":
        return <Form state={this.state} />
      default:
        return <List state={this.state} />
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
