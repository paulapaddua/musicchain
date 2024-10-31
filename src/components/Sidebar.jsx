import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <ul>
        <li className="mb-4"><a href="#">Home</a></li>
        <li className="mb-4"><a href="#">Melhores Músicas</a></li>
        <li className="mb-4"><a href="#">Notificações</a></li>
        <li className="mb-4"><a href="#">Explorar</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
