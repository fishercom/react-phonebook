import React from 'react';
import {Link} from "react-router-dom";

class List extends React.Component {

    state = this.props.state;

    render() {
        return (
            <section>
                <h2>All contacts</h2>
                <ul className="contactList">
                    {this.state.contacts.map((contact) => <li key={contact.id}>{contact.firstName} {contact.lastName} {contact.phoneNumber}</li>)}
                </ul>
                <button className="btn btn-primary" component={Form} to="/create">New Contact</button>
            </section>
        );
    }

}

export default List