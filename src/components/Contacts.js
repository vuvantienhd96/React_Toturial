import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {

    constructor() {
        super();
        this.state = {
            
        };
    }

    deleteContact = (id) => {
        // console.log(id);
        const { contacts } = this.state;
        const contactValue = contacts.filter( contact => contact.id !== id );
        this.setState({
            contacts: contactValue,
        });
    }

    render() {
        const { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact => 
                    <Contact 
                        key={contact.id}
                        contact ={contact}
                        deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
                    />
                )}
            </div>
        )
    }
}

export default Contacts;
