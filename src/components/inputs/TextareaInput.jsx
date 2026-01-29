const TextareaInput = ({ label, name, value, onChange }) => {
  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block font-semibold'>
        {label}
      </label>
      <textarea
        type='text'
        className='w-full p-2 border rounded-lg'
        name={name}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextareaInput;
