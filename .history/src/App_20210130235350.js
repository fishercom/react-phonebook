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
        { id: '6c07716-d803-cbea-ee83-00f8dfa5a45f', firstName: 'George', lastName: 'Maclain', phoneNumber: '98898989' },
        { id: 'eb11787-a1af-70d7-618-d27422c1ba', firstName: 'Ritha', lastName: 'Bertnard', phoneNumber: '94343532' }
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
