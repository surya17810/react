import React from 'react';
import 'semantic-ui-css/semantic.min.css';  // Import Semantic UI CSS

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="u" style={{ marginBottom: '30px' }}>
      <div className="content">
        {/* Contact Name */}
        <div className="header" style={{ marginBottom: '50px' }}>
          {name}
        </div>

        {/* Contact Email */}
        <div className="description" style={{ marginBottom: '90px' }}>
          {email}
        </div>
      </div>

      {/* Action Section */}
      <div className="extra content" style={{ textAlign: 'right' }}>
        <i
          className="trash alternate outline icon"
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => props.clickHandler(id)} // Delete handler
          title="Delete Contact" // Tooltip on hover
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
