import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Day 6/Home'
import ViewUser from './Day 6/ViewUser'
import Layout from './layout'
import PageNotFound from './PageNotFound'
import UserDetail from './Day 6/UserDetail'
import Todo from './Day 8/Todo'



export default function Path() {
 return (
    <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<Layout/>}> 
        <Route path='/' element={<Home/>} />
        <Route path='/UserList' element={<ViewUser/>} /> 
       <Route path='/ UserDetail' element={<UserDetail/>} />
       <Route path="/Day 8/Todo" element={<Todo/>} />
      </Route>
        
    </Routes>
  )
}
