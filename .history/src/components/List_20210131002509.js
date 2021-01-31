import React from 'react';

class List extends React.Component {

    state = this.props.state;

    render() {
        return (
            <section>
                <h2>All contacts</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contacts.map((contact) =>
                            <tr key={contact.id}>
                                <th scope="row">1</th>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.phoneNumber}</td>
                            </tr>)}
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={() => this.props.switch('Form')}>New Contact</button>
            </section>
        );
    }

}

export default List