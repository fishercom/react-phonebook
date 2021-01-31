import React from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        people: [
            { firstName: 'Margaret', lastName: 'Hamilton', id: '81d6ff6c-10f4-4db0-88f2-1ebf789b7779' },
            { firstName: 'Donald', lastName: 'Knuth', id: 'f515b8de-5916-47db-9fa8-75efe4a5ebb2' }
        ],
        personId: null,
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
