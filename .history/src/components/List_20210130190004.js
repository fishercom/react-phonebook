import React from 'react';

class List extends React.Component {

    state = this.props.state;


    renderForm(){
        this.setState({
            displayedTable: 'Form'
        })
        this.props.renderComponent();        
    }

    render() {

        return (
            <section>
                <h2>All contacts</h2>
                <ul className="contactList">
                    {this.state.contacts.map((contact) => <div><li key={contact.id}>{contact.firstName} {contact.lastName} {contact.phoneNumber}</li> </div>)}
                </ul>
                <button className="btn btn-primary" onClick={() => this.renderForm}>New Contact</button>
            </section>
        );
    }

}

export default List