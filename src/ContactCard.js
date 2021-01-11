import React from 'react';
import PropTypes from 'prop-types'
class ContactCard extends React.Component {
    render() {
        return (
            <div style={{ border: '1px solid black', width: '50%' }}>
                <h1 style={{ textAlign: 'center' }}>Contact Name: {this.props.name}</h1>
                <h3 style = {{ textAlign: 'center' }}>Email: {this.props.email}</h3>
                <h5 style={{ textAlign: 'center' }}>Mobile Number: {this.props.phoneNumber}</h5>
                <h5 style={{ textAlign: 'center' }}>Work Number: {this.props.workphone}</h5>
            </div>
            
        )
    }

}

ContactCard.proptype = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    workphone: PropTypes.number
}

export default ContactCard;