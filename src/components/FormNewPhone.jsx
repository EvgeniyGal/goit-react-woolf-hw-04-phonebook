import Input from './Input';
import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

export default class FormNewPhone extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = event => {
    event.preventDefault();
    const { onAddPhone } = this.props;

    onAddPhone({
      name: this.state.name,
      phone: this.state.phone,
    });

    this.setState({
      ...INITIAL_STATE,
    });
  };

  handleInputChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="w-[90%] p-5 flex flex-col  items-center gap-5 border border-stone-900 rounded-lg mt-10"
      >
        <Input
          type="text"
          name="name"
          label="Name"
          onChange={this.handleInputChange}
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+((\[' -\]\\\[a-zA-Zа-яА-Я \])?\[a-zA-Zа-яА-Я\]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
        />
        <Input
          type="tel"
          name="phone"
          label="Phone"
          onChange={this.handleInputChange}
          value={this.state.phone}
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
}
