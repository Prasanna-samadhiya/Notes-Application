import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's snow theme CSS
import { addNewNotes } from '../Redux/NotesSlice/NoteSlice';  
import { useHotkeys } from 'react-hotkeys-hook';

function AddNotes() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({ title: '', description: '' });

  const handleChange = (value) => {
    setNote({ ...note, description: value });
  };

  const addNote = () => {
    dispatch(addNewNotes(note));
    setNote({ title: '', description: '' });
  };
  useHotkeys('n',()=>{dispatch(addNewNotes(note));setNote({ title: '', description: '' });console.log("key pressed")})
  return (
    <div className='bg-green-600  w-full flex items-center justify-start flex-col gap-4 p-4' style={{height:"700px"}}>
      <div className="title">
        <label htmlFor="note-title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note Title</label>
        <div className="flex w-[10vw]">
          <input type="text" id="note-title" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your title" name='title' value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} />
          <button type="button" className="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" onClick={addNote}>
            Post Note
          </button>
        </div>
      </div>

      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="note-description" className="sr-only">Note Description</label>
          <ReactQuill
            id="note-description"
            value={note.description}
            onChange={handleChange}
            placeholder="Write your note here..."
            modules={{ toolbar: [
              [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
              [{ 'size': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['link', 'image'],
              ['clean']
            ] }}
            theme="snow"
          />
        </div>
      </div>
    </div>
  );
}

export default AddNotes;
