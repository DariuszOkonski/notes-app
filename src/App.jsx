import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'first title',
      priority: 'Medium',
      category: 'Work',
      description: 'Some first description',
    },
    {
      id: 2,
      title: 'second title',
      priority: 'Medium',
      category: 'Work',
      description: 'Some second description',
    },
  ]);

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />

      <NoteList notes={notes} />
    </div>
  );
}

export default App;
