
import './App.css';
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const contacts =[
    {
      id:"1",
      "name":"Mohit",
      "email":"mohit@gmail.com"
    },
    {
      id:"2",
      "name":"Surya",
      "email":"Surya@gmail.com"
    },

  ]
  return (
   <div className="ui container">
    lavada
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
   </div>
      
  );
}

export default App;
