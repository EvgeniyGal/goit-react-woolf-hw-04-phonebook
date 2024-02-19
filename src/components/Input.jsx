export default function Input({
  name,
  label,
  pattern,
  title,
  required,
  type,
  value,
  onChange,
}) {
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
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleOnChange}
        pattern={pattern}
        title={title}
        required={required}
      />
    </p>
  );
}
