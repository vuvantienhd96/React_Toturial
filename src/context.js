import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'Jdoe@gmail.com',
                phone: '555-555-666'
            },
            {
                id: 2,
                name: 'lyly lan',
                email: 'lyly@gmail.com',
                phone: '455-565-666'
            },
            {
                id: 3,
                name: 'Joe Doe',
                email: 'doe@gmail.com',
                phone: '155-355-666'
            }
        ]
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

