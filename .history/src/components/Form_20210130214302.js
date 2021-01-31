import React from 'react';
import { Redirect } from 'react-router-dom'

class Form extends React.Component {

    contact = { id: '', firstName: '', lastName: '', phoneNumber: '' }
    success = false

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        this.contact ={ ...this.contact,
                [name]: value};
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, value } = event.target;

        const state = this.props.state;
        this.setState(state.contacts, {...this.contact,
            [name]: value});
        
        //this.success=true
        this.props.history.push('/')
    }

    render() {
        if (this.success === true) {
            return <Redirect to='/' />
        }

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h2>Add Contact</h2>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" name="firstName" onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="phoneNumber" onChange={this.handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-success" onClick={() => this.handleSubmit}>Create</button>
                    <a className="m-3 btn btn-danger" href="/">Cancel</a>
                </div>
            </form>
        );
    }

}

export default Form