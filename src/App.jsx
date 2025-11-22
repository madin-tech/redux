import React from 'react'
import TodoPg from "./pages/TodoPg"
import Product from "./pages/Product";
import TodoList from './components/TodoList'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import UserPg from './pages/UserPg';
import Private from './components/Private';
import User from './components/User';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TodoPg />} />
          <Route path="/cards" element={<Product />} />
         
          <Route path="/" element={<Private />}>
          <Route path='/profile' element={<UserPg/>}  />
          </Route>
        </Route>
            <Route path="/login" element={<User />} />
      </Routes>
    </>
  );
}

export default App