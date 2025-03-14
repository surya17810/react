import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  if (!props.contact) return null; // Ensure contact data exists

  const { id, name, email } = props.contact;

  return (
    <div
      style={{
        marginBottom: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="content">
        {/* Contact Name */}
        <Link
          to={`/contact/${id}`}
          state={{ contact: props.contact }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="header" style={{ marginBottom: "10px", fontWeight: "bold" }}>
            {name}
          </div>
        </Link>

        {/* Contact Email */}
        <div className="description" style={{ marginBottom: "10px", color: "gray" }}>
          {email}
        </div>
      </div>

      {/* Action Section */}
      <div className="extra content" style={{ textAlign: "right" }}>
        {/* Edit Button */}
        <Link
          to={`/edit/${id}`} // ✅ Fixed incorrect `to` syntax
          state={{ contact: props.contact }} // ✅ Corrected state syntax
        >
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", cursor: "pointer", marginTop: "7px" }}
            title="Edit Contact"
          ></i>
        </Link>

        {/* Delete Button */}
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            cursor: "pointer",
            marginTop: "7px",
            marginLeft: "10px",
          }}
          onClick={() => props.clickHandler(id)}
          title="Delete Contact"
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
 