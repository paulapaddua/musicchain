
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="container mx-auto p-4">
          <CreatePost />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default App;
