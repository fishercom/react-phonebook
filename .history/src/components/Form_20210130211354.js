import React from 'react';

class Form extends React.Component {

    contact = { id: '', firstName: '', lastName: '', phoneNumber: '' }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        this.contact ={ ...this.contact,
                [name]: value};
    };

    handleSubmit = (event) => {
        event.preventDefault()

        const state = this.props.state;
        state.setState(this.contacts, ...this.contact);
    }

    render() {

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Add Contact</h2>
                <div class="form-group">
                    <label>First Name:</label>
                    <input type="text" name="firstName" onChange={this.handleChange} class="form-control" />
                </div>
                <div class="form-group">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" onChange={this.handleChange} class="form-control" />
                </div>
                <div class="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" onChange={this.handleChange} class="form-control" />
                </div>
                <div class="form-group">
                    <button className="btn btn-success" onClick={() => this.handleSubmit}>Create</button>
                    <a className="m-3 btn btn-danger" href="/">Cancel</a>
                </div>
            </form>
        );
    }

}

export default Form