import React, { useState } from 'react';

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className='bg-white p-4 mb-4 shadow-md rounded-md gap-y-2 flex flex-col'>
      <div>
        <h2 className='text-xl font-bold'>Título da Música</h2>
        <p>Descrição da música ou post...</p>
      </div>
      <audio controls className='w-full mt-2'>
        <source
          src='.\media\Sam Smith – Time After Time (Live At Abbey Road Studios).mp3'
          type='audio/mpeg'
        />
        Seu navegador não suporta o elemento de áudio.
      </audio>
      <div className='flex mt-4 justify-between w-[100%]'>
        <div className='flex items-center gap-2'>
          <button
            onClick={handleLike}
            className='bg-blue-600 text-white py-2 px-4 rounded mr-2 flex gap-2'
          >
            <span class='material-symbols-outlined text-md'>favorite</span>
            <span class='text-md'>Curtir</span>
          </button>
          <span>{likes} curtidas</span>
        </div>
        <div className='flex justify-center items-center'>
          {views} visualizações
        </div>
      </div>
    </div>
  );
};

export default Post;
