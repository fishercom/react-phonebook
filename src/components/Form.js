import React from 'react';
import uuid from 'react-uuid'

class Form extends React.Component {

    contact = { id: uuid() }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        
        this.contact ={ ...this.contact, [name]: value};
//        super.setState(this.contact);

    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        const state = this.props.state;
        
        this.contact ={ ...this.contact, [name]: value};
        state.contacts.push(this.contact);
        super.setState(state);
      
        this.props.switch();
    };

    render() {

        return (
            <section>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h2>New Contact</h2>
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
                        <button className="btn btn-success" onClick={() => this.handleSubmit}>Save changes</button>
                        <button className="m-3 btn btn-danger" onClick={() => this.props.switch()}>Cancel</button>
                    </div>
                </form>
            </section>
        );
    }

}

export default Form