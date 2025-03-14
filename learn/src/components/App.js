import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // ✅ Retrieve contacts from JSON Server
  const retrieveContacts = async () => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
  };

  // ✅ Load contacts when component mounts
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // ✅ Save contacts to localStorage whenever contacts state changes
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  // ✅ Add Contact Handler
  const addContactHandler = async (contact) => {
    const request = { id: uuidv4(), ...contact };
    try {
      const response = await api.post("/contacts", request);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // ✅ Update Contact Handler
  const updateContactHandler = async (contact) => {
    try {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      setContacts(contacts.map((c) => (c.id === contact.id ? response.data : c)));
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // ✅ Remove Contact Handler
  const removeContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // ✅ Search Handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const filteredContacts = contacts.filter((contact) =>
        Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredContacts);
    } else {
      setSearchResults(contacts);
    }
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route
            path="/edit/:id"
            element={<EditContact contacts={contacts} updateContactHandler={updateContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
