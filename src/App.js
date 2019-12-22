import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter';
import ContactList from './Components/ContactList';

import './App.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const filteredName = this.state.contacts.filter(
      contact => contact.name === name,
    );

    if (filteredName.length > 0) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(state => ({
      contacts: [...state.contacts, contact],
    }));
  };

  onChangeFilter = e => this.setState({ filter: e.target.value });

  onDeleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    console.log(filteredContacts);

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm saveContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
