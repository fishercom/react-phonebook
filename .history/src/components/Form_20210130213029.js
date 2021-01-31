import React from 'react';
import { useHistory } from 'react-router-dom';

class Form extends React.Component {

    contact = { id: '', firstName: '', lastName: '', phoneNumber: '' }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    history = useHistory();

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
        
            history.push("/path/to/push");
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