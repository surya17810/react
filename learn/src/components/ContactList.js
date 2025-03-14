import React,{useRef} from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const inputE1=useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

 

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
    );
  });
  const getSearchTerm=() => {
       props.searchKeyword(inputE1.current.value);
  };
  return (
    <div className="main" style={{ marginTop: "50px", padding: "20px" }}>
      {/* Header & Button in Flex Container */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Contact List</h2>
        <Link to="/add">
          <button className="ui button blue">Add Contact</button>
        </Link>
      </div>

      {/* Contact List */}
      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputE1} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
          <i className="search icon"></i>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>{renderContactList.length>0 ? renderContactList : "No Contacts Available"}</div>
    </div>
  );
};

export default ContactList;
