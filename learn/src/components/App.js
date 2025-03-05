import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports for React Router v6
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Correct import for UUID
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);

  // Handler for adding a contact
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]); // Add new contact with unique ID
  };

  // Handler for removing a contact
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  // Retrieving contacts from local storage on component mount
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  // Storing contacts in local storage whenever contacts state changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          {/* Route for adding a new contact */}
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          {/* Route for displaying the contact list */}
          <Route
            path="/"
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
