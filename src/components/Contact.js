import React from 'react';
import PropTypes from 'prop-types'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Consumer } from '../context';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            showContactInfo: true,
        };

        this.onShowClick = this.onShowClick.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    
    onShowClick(name, e) {
        this.setState({
            showContactInfo: !this.state.showContactInfo,
        });    
    }

    onDeleteClick(id, dispatch) {
        dispatch({ type: 'DELETE_CONTACT', payload: id})
    }

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;
        
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{contact.name}
                                <i onClick={ this.onShowClick }  className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>
                                <i className="fas fa-times"
                                    onClick={ this.onDeleteClick.bind(this, contact.id, dispatch) }
                                    style={{color: 'red',cursor: 'pointer', 
                                    float: 'right'}}></i>
                            </h4>
                            { showContactInfo ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">Email: {contact.email}</li>
                                        <li className="list-group-item">Phone: {contact.phone}</li>
                                    </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>

            
          );
    }
        
}

    
  


Contact.defaultProps = {
    name: 'Ioally',
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    

}
export default Contact;
