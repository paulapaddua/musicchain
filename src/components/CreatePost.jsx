import React, { useState } from 'react';

const CreatePost = () => {
  const [text, setText] = useState('');

  const handlePost = () => {
    // Lógica para postar a música
    alert('Post criado: ' + text);
    setText('');
  };

  return (
    <div className='bg-white p-4 mb-4 shadow-md rounded-md'>
      <textarea
        className='w-full p-2 border border-gray-300 rounded'
        rows='4'
        placeholder='Escreva algo...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handlePost}
        className='bg-blue-600 text-white py-2 px-4 rounded mt-2 text-md'
      >
        Postar
      </button>
    </div>
  );
};

export default CreatePost;
