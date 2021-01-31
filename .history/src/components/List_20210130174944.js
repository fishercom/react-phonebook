import React from 'react';

class List extends React.Component {

    render() {
        let inf = this.props.info;
        let act = this.props.info.actionOptions;
        return (
            <section>
                <h2>All People (Click to manage)</h2>
                <ul className="PersonList">
                    {inf.people.map((person) => <div><li onClick={() => { this.props.switch(act.View, { personId: person.id }); }} key={person.id}>{person.firstName} {person.lastName}</li> </div>)}
                </ul>
                <button className="createPerson" onClick={() => this.props.switch(act.Create)}>Create New Person</button>
            </section>
        );
    }

}

export default List