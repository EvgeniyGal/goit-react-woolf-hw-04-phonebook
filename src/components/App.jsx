import { Component } from 'react';
import Contacts from './Contacts';
import FormNewPhone from './FormNewPhone';
import { v4 as uuid } from 'uuid';
import Filter from './Filter';

export class App extends Component {
  state = { contacts: [], filter: '' };

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('phoneBook'));
    if (localData) {
      this.setState({ contacts: localData });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('phoneBook', JSON.stringify(this.state.contacts));
    }
  }

  handleAddPhone = newPhone => {
    if (
      this.state.contacts.some(
        ({ name }) => newPhone.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${newPhone.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newPhone, id: uuid() }],
      };
    });
  };

  handleDeletePhone = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(phone => phone.id !== id),
      };
    });
  };

  handleFilterChange = (_, filter) => {
    this.setState({ filter });
  };

  render() {
    const filteredPhoneList = this.state.filter
      ? this.state.contacts.filter(
          ({ name }) =>
            name.slice(0, this.state.filter.length).toLowerCase() ===
            this.state.filter.toLowerCase()
        )
      : this.state.contacts;

    return (
      <div className="min-w-96 w-1/2 mx-auto flex flex-col items-center bg-stone-200  py-10 rounded-md">
        <h1 className="text-stone-700 text-6xl  font-bold text-center">
          Phonebook
        </h1>
        <FormNewPhone onAddPhone={this.handleAddPhone} />
        <h2 className="text-3xl font-bold text-stone-700 mt-5">Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <Contacts
          phoneList={filteredPhoneList}
          onDelete={this.handleDeletePhone}
        />
      </div>
    );
  }
}
