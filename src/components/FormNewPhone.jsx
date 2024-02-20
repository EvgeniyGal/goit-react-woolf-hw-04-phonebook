import Input from './Input';
import { useState } from 'react';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

export default function FormNewPhone({ onAddPhone }) {
  const [formState, setFormState] = useState(INITIAL_STATE);

  function handleSubmit(event) {
    event.preventDefault();

    onAddPhone({
      name: formState.name,
      phone: formState.phone,
    });

    setFormState({
      ...INITIAL_STATE,
    });
  }

  function handleInputChange(field, value) {
    setFormState(prevState => ({ ...prevState, [field]: value }));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] p-5 flex flex-col  items-center gap-5 border border-stone-900 rounded-lg mt-10"
    >
      <Input
        type="text"
        name="name"
        label="Name"
        onChange={handleInputChange}
        value={formState.name}
        pattern="^[a-zA-Zа-яА-Я]+((\[' -\]\\\[a-zA-Zа-яА-Я \])?\[a-zA-Zа-яА-Я\]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required={true}
      />
      <Input
        type="tel"
        name="phone"
        label="Phone"
        onChange={handleInputChange}
        value={formState.phone}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required={true}
      />
      <button
        type="submit"
        className="text-xl
        px-6 py-2 rounded-lg bg-stone-800 text-stone-100  hover:bg-stone-600 transition-colors cursor-pointer"
      >
        Add contact
      </button>
    </form>
  );
}
