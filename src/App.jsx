import React from 'react'
import TodoPg from "./pages/TodoPg"
import Product from "./pages/Product";
import TodoList from './components/TodoList'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TodoPg />} />
          <Route path="/cards" element={<Product/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App