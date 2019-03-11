import React from 'react';
import PropTypes from 'prop-types'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    onDeleteClick(e) {
        this.props.deleteClickHandler();
    }

    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state;
        
        return (
            <div className="card card-body mb-3">
              <h4>{contact.name}
              <i onClick={ this.onShowClick }  className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>
              <i className="fas fa-times"
                onClick={ this.onDeleteClick }
                style={{color: 'red',cursor: 'pointer', 
                float: 'right'}}></i></h4>
                { showContactInfo ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {contact.email}</li>
                        <li className="list-group-item">Phone: {contact.phone}</li>
                    </ul>
              ) : null}
            </div>
          );
    }
        
}

    
  


Contact.defaultProps = {
    name: 'Ioally',
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired,

}
export default Contact;
