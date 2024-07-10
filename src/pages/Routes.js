import React from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import Register from './Auth/Register';
import Login from './Auth/Login';
import Forget from './Auth/Forget';
import NoPage404 from './Frontend/NoPage404';
import Frontend from './Frontend';

export default function Index() {
  return (
    <>
   
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forget' element={<Forget />}/>
        <Route path='/frontend' element={<Frontend />} />
        <Route path='*' element={<NoPage404 />}/>
    </Routes>
   
    </>
  )
}
