import React from 'react';

import './App.css';
import header from './assets/images/header.png';

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
      action: null,
      contact: null
    };
  }

  changeView = (action) => {
    let state = { ...this.state };
    state.action = action;

    console.log(state.contacts);
    super.setState(state);
  }

  render() {
    let view = null;
    switch (this.state.action) {
      case 'Form':
        view = <Form state={this.state} switch={this.changeView} />
        break;
      default:
        view = <List state={this.state} switch={this.changeView} />
    }

    return (
      <div>
        <header>
          <img src={header} alt="header" style={{width: '100%'}} />
        </header>
        <div className="container mt-3">
        {view}
        </div>
      </div>)
  }

}

export default App;
