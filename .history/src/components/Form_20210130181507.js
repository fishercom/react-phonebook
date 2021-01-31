import React from 'react';

const uuid = require('uuid4');

class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            newPersonInfo: { id: uuid() }
        };
    }

    handleChange = (event) => {
        let tmpState = { ...this.state };
        tmpState.newPersonInfo[event.target.getAttribute('propname')] = event.target.value;
        super.setState(tmpState);
    };

    handleSubmit = (e) => {
        e.preventDefault()

        setNewNumber({
            firstName: "",
            lastName: "",
            phone: ""
        })
    }
    render() {
        var state = super.state;

        return (
            <form className="phone-form flex column" onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Creating new person...</h2>
                <div className="CreatePerson">
                    <label>First Name: </label> <input type="text" value={this.state.newPersonInfo.firstName} onChange={this.handleChange} propname="firstName" />
                    <label>Last Name: </label> <input type="text" value={this.state.newPersonInfo.lastName} onChange={this.handleChange} propname="lastName" />
                    <label>Phone Number: </label> <input type="tel" value={this.state.newPersonInfo.phoneNumber} onChange={this.handleChange} propname="phoneNumber" />
                    <button onClick={() => this.handleSubmit}>Create</button>
                    <button onClick={() => state.displayedTable='List'}>Cancel</button>
                </div >
            </form>
        );
    }

}

export default Form