import React, { Component } from 'react';
import T from 'prop-types';
import shortid from 'shortid';

export default class ContactForm extends Component {
  static propTypes = {
    saveContact: T.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();

  numberInputId = shortid.generate();

  hadleSubmit = e => {
    e.preventDefault();

    this.props.saveContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="form" onSubmit={this.hadleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>

        <label htmlFor={this.numberInputId}>
          Number
          <input
            id={this.numberInputId}
            type="number"
            value={number}
            onChange={this.handleChange}
            name="number"
          />
        </label>

        <button type="submit">add contact</button>
      </form>
    );
  }
}
