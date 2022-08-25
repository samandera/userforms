import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container'
import './App.css';
import AddUser from './userForms/AddUser';
import EditUser from './userForms/EditUser';
import Users from './users/Users'

function App() {
  return (
    <BrowserRouter>
      <Container fixed sx={{ p: 10 }}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="editUser/:id" element={<EditUser />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
