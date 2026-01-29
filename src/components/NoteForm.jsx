import { useState } from 'react';

const NoteForm = () => {
  // const [title, setTitle] = useState('');
  // const [priority, setPriority] = useState('Medium');
  // const [category, setCategory] = useState('Work');
  // const [description, setDescription] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      <div className='mb-4'>
        <label htmlFor='title' className='block font-semibold'>
          Title
        </label>
        <input
          type='text'
          name='title'
          className='w-full p-2 border rounded-lg'
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='priority' className='block font-semibold'>
          Priority
        </label>
        <select
          type='text'
          className='w-full p-2 border rounded-lg'
          name='priority'
          value={formData.priority}
          onChange={handleChange}
        >
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>

      <div className='mb-4'>
        <label htmlFor='category' className='block font-semibold'>
          Category
        </label>
        <select
          type='text'
          className='w-full p-2 border rounded-lg'
          name='category'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='Work'>Work</option>
          <option value='Personal'>Personal</option>
          <option value='Ideas'>Ideas</option>
        </select>
      </div>

      <div className='mb-4'>
        <label htmlFor='description' className='block font-semibold'>
          Description
        </label>
        <textarea
          type='text'
          className='w-full p-2 border rounded-lg'
          name='description'
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
