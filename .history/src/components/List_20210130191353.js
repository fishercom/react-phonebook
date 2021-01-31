import React from 'react';

class List extends React.Component {

    state = this.props.state;


    renderForm = (e) => {
        console.log(this.state.contacts);
        this.setState({
            displayedTable: 'Form'
        })
        alert(this.state.displayedTable);
        this.props.changeView();
    }

    render() {
        return (
            <section>
                <h2>All contacts</h2>
                <ul className="contactList">
                    {this.state.contacts.map((contact) => <li key={contact.id}>{contact.firstName} {contact.lastName} {contact.phoneNumber}</li>)}
                </ul>
                <button className="btn btn-primary" onClick={this.renderForm}>New Contact</button>
            </section>
        );
    }

}

export default List