import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
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
        };
    }

    render() {
        const { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact => 
                    <Contact 
                        key={contact.id}
                        contact ={contact}
                    />
                )}
            </div>
        )
    }
}

export default Contacts;