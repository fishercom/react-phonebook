import React from 'react';

class Form extends React.Component {

    contact = { id: '', firstName: '', lastName: '', phoneNumber: '' }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

    };

    handleSubmit = (event) => {
        event.preventDefault()
        const state = this.props.state;

    }

    render() {

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Add Contact</h2>
                <div class="form-group">
                    <label>First Name:</label>
                    <input type="text" value={this.contact.firstName} onChange={this.handleChange} propname="firstName" className="FormControl" />
                </div>
                <div class="form-group">
                    <label>Last Name:</label>
                    <input type="text" value={this.contact.lastName} onChange={this.handleChange} propname="lastName" />
                </div>
                <div class="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" value={this.contact.phoneNumber} onChange={this.handleChange} propname="phoneNumber" />
                </div>
                <div class="form-group">
                    <button className="btn btn-success" onClick={() => this.handleSubmit}>Create</button>
                    <a className="btn btn-danger" href="/">Cancel</a>
                </div>
            </form>
        );
    }

}

export default Form