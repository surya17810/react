import React from 'react';
import ContactCard from "./ContactCard";
const ContactList=(props)=> {
    console.log(props);
    const deleteContactHandler=(id) => {
        props.getContactId(id);
    };
    const contacts=[{
        id:"1",
        "name":"surya",
        "email":"wergrg",
    }]
    const renderContactList=contacts.map((contact)=>{
        return(<ContactCard contact={contact} clickHandler ={deleteContactHandler}/>
        );
    })
     return(
        <div className="ui called list">
          
        {renderContactList}

        </div>
     )
}
export default ContactList;