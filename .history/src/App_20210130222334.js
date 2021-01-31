import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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

  changeView = (action, changeParams = {}) => {
    let toChange = { personId: null, newPerson: null, updatedPerson: null, deleteId: null };
    toChange = { ...changeParams };
    console.log(toChange);

    let state = { ...this.state };
    state.action = action;
    state.personId = toChange.personId;
    let tmp = [...this.state.contacts];
    if (toChange.newPerson) {
        tmp.push(toChange.newPerson);
        state.personId = toChange.newPerson.id;
    }
    state.contacts = tmp;

    console.log(state);
    super.setState(state);
}

  render () {
      return (

        <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create'>
                <Form state={this.state}></Form>
              </Route>
              <Route path='/'>
                <List state={this.state}></List>
              </Route>
          </Switch>
        </div>
      </Router>
      )
  }
}

export default App;
