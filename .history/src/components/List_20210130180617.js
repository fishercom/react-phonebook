import React from 'react';

class List extends React.Component {

    render() {
        let inf = this.props.info;
        var state = super.state;

        return (
            <section>
                <h2>All People (Click to manage)</h2>
                <ul className="PersonList">
                    {inf.people.map((person) => <div><li key={person.id}>{person.firstName} {person.lastName}</li> </div>)}
                </ul>
                <button className="createPerson" onClick={() => state.displayedTable='Form'}>New Contact</button>
            </section>
        );
    }

}

export default List