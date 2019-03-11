import React from 'react';
import PropTypes from 'prop-types'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {};

        // this.onShowClick = this.onShowClick.bind(this);
    }

    
    onShowClick(name, e) {
        console.log(name);
    }
    render() {
        const {contact} = this.props;
        return (
            <div className="card card-body mb-3">
              <i className="fas fa-angle-down"></i>
              <h4 onClick={ this.onShowClick.bind(this, contact.id) }>{contact.name} <FontAwesomeIcon icon="igloo" /></h4>
              <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
              </ul>
            </div>
          );
    }
        
}

    
  


Contact.defaultProps = {
    name: 'Ioally',
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}
export default Contact;
