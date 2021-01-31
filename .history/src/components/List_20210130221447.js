import React from 'react';

class List extends React.Component {

    state = this.props.state;

    render() {
        return (
            <section>
                <h2>All contacts</h2>
                <ul className="contactList">
                    {this.state.contacts.map((contact) => <li key={contact.id}>{contact.firstName} {contact.lastName} {contact.phoneNumber}</li>)}
                </ul>
                <a className="btn btn-primary" href="/create">New Contact</a>
                <button className="btn btn-primary" onClick={() => this.props.switch('Form')}>New Contact</button>
            </section>
        );
    }

}

export default List