import React from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';


class App extends React.Component {


  renderComponent(){
    switch(this.state.displayedTable) {
      case "Form":
        return <Form />
      default:
        return <List />
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
