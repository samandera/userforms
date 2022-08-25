import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './userForms/AddUser';
import EditUser from './userForms/EditUser';
import Users from './users/Users'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="editUser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
