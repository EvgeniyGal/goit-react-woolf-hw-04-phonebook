import Contacts from './Contacts';
import FormNewPhone from './FormNewPhone';
import { v4 as uuid } from 'uuid';
import Filter from './Filter';
import { useEffect, useState } from 'react';

export function App() {
  const [contactsState, setContactsState] = useState([]);
  const [filterState, setFilterState] = useState('');

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('phoneBook'));
    if (localData) {
      setContactsState(localData);
    }
  }, []);

  function handleAddPhone(newPhone) {
    if (
      contactsState.some(
        ({ name }) => newPhone.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${newPhone.name} is already in contacts`);
      return;
    }

    setContactsState(prevState => [...prevState, { ...newPhone, id: uuid() }]);

    localStorage.setItem('phoneBook', JSON.stringify(contactsState));
  }

  function handleDeletePhone(id) {
    setContactsState(prevState => [
      ...prevState.filter(phone => phone.id !== id),
    ]);
  }

  function handleFilterChange(_, filter) {
    setFilterState(filter);
  }

  const filteredPhoneList = filterState
    ? contactsState.filter(
        ({ name }) =>
          name.slice(0, filterState.length).toLowerCase() ===
          filterState.toLowerCase()
      )
    : contactsState;

  return (
    <div className="min-w-96 w-1/2 mx-auto flex flex-col items-center bg-stone-200  py-10 rounded-md">
      <h1 className="text-stone-700 text-6xl  font-bold text-center">
        Phonebook
      </h1>
      <FormNewPhone onAddPhone={handleAddPhone} />
      <h2 className="text-3xl font-bold text-stone-700 mt-5">Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <Contacts phoneList={filteredPhoneList} onDelete={handleDeletePhone} />
    </div>
  );
}
