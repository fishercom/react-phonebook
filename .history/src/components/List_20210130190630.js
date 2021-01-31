import React from 'react';

class List extends React.Component {

    state = this.props.state;


    renderForm(){
        this.setState({
            displayedTable: 'Form'
        })
        alert(this.state.displayedTable);
        this.props.renderComponent();        
    }

    render() {
        console.log(this.state.contacts);
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