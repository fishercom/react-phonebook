import React from 'react';
import { withRouter } from 'react-router-dom';

const uuid = require('uuid4');

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: { id: uuid() }
        };
    }    

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
        this.contact ={ ...this.contact, [name]: value};
        super.setState(this.contact);

    };

    render() {

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

export default withRouter(Form)