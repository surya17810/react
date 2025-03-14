import React from "react";
import { useLocation, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import user from "../images/User.jpg";

const ContactDetail = () => {
  const location = useLocation();
  const contact = location.state?.contact; // Safe access using optional chaining

  if (!contact) {
    return <h2 style={{ textAlign: "center", marginTop: "100px" }}>No Contact Data Found</h2>;
  }

  const { name, email } = contact;

  return (
    <div className="main" style={{ marginTop: "100px" }}>
      <div
        className="ui card centered"
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          width: "50%",
          margin: "auto",
        }}
      >
        <div className="image">
          <img src={user} alt="user" style={{ width: "150px", borderRadius: "50%" }} />
        </div>
        <div className="content">
          <div className="header" style={{ fontSize: "1.5em", marginTop: "10px" }}>{name}</div>
          <div className="description" style={{ fontSize: "1.2em", color: "#555" }}>{email}</div>
        </div>

        {/* Back to Contact List Button */}
        <div className="center-div" style={{ marginTop: "20px" }}>
          <Link to="/">
            <button className="ui button blue">Back to Contact List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
