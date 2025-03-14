import React from "react";
import { useParams, useNavigate } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    
    // ✅ Find the contact based on the ID
    const { id } = this.props.params;
    const contact = this.props.contacts.find((c) => c.id === id) || { id: "", name: "", email: "" };

    this.state = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.props.navigate("/"); // ✅ Redirect to home page
  };

  render() {
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button> {/* ✅ Fixed button text */}
        </form>
      </div>
    );
  }
}

// ✅ Wrap with hooks for navigation and params
export default function EditContactWrapper(props) {
  const params = useParams();
  const navigate = useNavigate();
  return <EditContact {...props} params={params} navigate={navigate} />;
}
