import Input from './Input';

export default function Filter({ ...props }) {
  return (
    <div className="mt-5 flex flex-col gap-5 w-full px-5">
      <Input
        type="text"
        name="filter"
        label="Find contacts by name"
        {...props}
      />
    </div>
  );
}
