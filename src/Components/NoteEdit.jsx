import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's snow theme CSS

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ]
  };

  const handleTextChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleTextChange}
        modules={modules}
      />
    </div>
  );
};

export default TextEditor;
