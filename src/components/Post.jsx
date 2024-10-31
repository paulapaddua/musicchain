import React, { useState } from 'react';

const Post = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white p-4 mb-4 shadow-md">
      <h2 className="text-xl font-bold">Título da Música</h2>
      <p>Descrição da música ou post...</p>
      <audio controls className="w-full mt-2">
        <source src="" type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <div className="mt-4 flex items-center">
        <button 
          onClick={handleLike} 
          className="bg-blue-600 text-white py-2 px-4 rounded mr-2"
        >
          Curtir
        </button>
        <span>{likes} curtidas</span>
      </div>
    </div>
  );
};

export default Post;
