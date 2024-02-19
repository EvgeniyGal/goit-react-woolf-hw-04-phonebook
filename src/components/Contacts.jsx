import Contact from './ContactItem';

export default function Contacts({ onDelete, phoneList }) {
  return (
    <div className="mt-5 flex flex-col gap-5 w-full px-5">
      <ul className="flex flex-col gap-3">
        {phoneList.map(phone => (
          <Contact onDelete={onDelete} key={phone.id} data={phone} />
        ))}
      </ul>
    </div>
  );
}
