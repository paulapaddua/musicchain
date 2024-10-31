
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

const App = () => {
  return (
    <div className="flex h-[100%]">
      <Sidebar />
      <div className="flex-1 h-[100%]">
        <Navbar />
        <div className="container p-4 bg-slate-200 flex flex-col h-[100%] w-[100%]">
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
