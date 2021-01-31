import React from 'react';

class List extends React.Component {

    render() {
        let state = this.props.state;

        return (
            <section>
                <h2>All contacts</h2>
                <ul className="contactList">
                    {state.contacts.map((contact) => <div><li key={contact.id}>{contact.firstName} {contact.lastName} {contact.phoneNumber}</li> </div>)}
                </ul>
                <button className="btn btn-primary" onClick={() => state.displayedTable='Form'}>New Contact</button>
            </section>
        );
    }

}

export default List