export default function Input({ name, label, onChange, ...props }) {
  function handleOnChange(event) {
    const currValue = event.target.value.trim();
    const currName = event.target.name.trim();

    onChange(currName, currValue);
  }

  return (
    <p className="flex flex-col gap-2  w-full">
      <label className=" text-xl text-stone-700 " htmlFor={name}>
        {label}
      </label>
      <input
        className=" text-xl text-stone-700
                   p-3 rounded-lg outline-stone-500 bg-stone-50"
        id={name}
        name={name}
        onChange={handleOnChange}
        {...props}
      />
    </p>
  );
}
