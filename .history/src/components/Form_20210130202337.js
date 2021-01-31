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
            <Form onSubmit={(e) => this.handleSubmit(e)}>
 
                <h2>Add Contact</h2>
                <div className="row">
                    <div className="col-6">First Name:</div>
                    <div className="col-6"><input type="text" value={this.contact.firstName} onChange={this.handleChange} propname="firstName" className="FormControl" /></div>
                </div>
                <div className="row">
                    <div className="col-6">Last Name:</div>
                    <div className="col-6"><input type="text" value={this.contact.lastName} onChange={this.handleChange} propname="lastName" /></div>
                </div>
                <div className="row">
                    <div className="col-6">Phone Number:</div>
                    <div className="col-6"><input type="tel" value={this.contact.phoneNumber} onChange={this.handleChange} propname="phoneNumber" /></div>
                </div>
                <div className="row">
                    <div className="col-6">First Name:</div>
                    <div className="col-6">
                        <button className="btn btn-success" onClick={() => this.handleSubmit}>Create</button>
                        <a className="btn btn-danger" href="/">Cancel</a>
                    </div>
                </div>
            </Form>
        );
    }

}

export default Form