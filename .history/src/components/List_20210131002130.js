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
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody>
    </table>

                <ul className="contactList">
                    {this.state.contacts.map((contact) => <li key={contact.id}>{contact.firstName} {contact.lastName} {contact.phoneNumber}</li>)}
                </ul>
                <button className="btn btn-primary" onClick={() => this.props.switch('Form')}>New Contact</button>
            </section>
        );
    }

}

export default List