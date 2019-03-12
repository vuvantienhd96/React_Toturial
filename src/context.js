import React, {Component} from  'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
        return {
            ...state,
            contacts: state.contacts.filter(contact => 
                contact.id !== action.payload
            )
        }
    default:
        return state;
    }
}

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
        ],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;