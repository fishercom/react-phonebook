import React from 'react';
import {Link} from "react-router-dom";

class Form extends React.Component {

    state = this.props.state;

    constructor(props) {
        super(props);
        this.setState({
          contact: 
            { id: '', firstName: '', lastName: '', phoneNumber: '' }
        });
      }    

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

    };

    handleSubmit = (event) => {
        event.preventDefault()

    }
    render() {

        return (
            <form className="phone-form flex column" onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Add Contact</h2>
                <div className="CreatePerson">
                    <label>First Name: </label> <input type="text" value={this.state.contact.firstName} onChange={this.handleChange} propname="firstName" />
                    <label>Last Name: </label> <input type="text" value={this.state.contact.lastName} onChange={this.handleChange} propname="lastName" />
                    <label>Phone Number: </label> <input type="tel" value={this.state.contact.phoneNumber} onChange={this.handleChange} propname="phoneNumber" />
                    <button onClick={() => this.handleSubmit}>Create</button>
                    <a className="btn btn-primary" href="/">Cancel</a>
                </div >
            </form>
        );
    }

}

export default Form