import React from 'react';

const [newNumber, setNewNumber] = {
    firstName: "",
    lastName: "",
    phoneNumber: ""
}

class Form extends React.Component {

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setNewNumber({
            ...newNumber,
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()

        setNewNumber({
            firstName: "",
            lastName: "",
            phone: ""
        })
    }
    render() {
        let inf = this.props.info;

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