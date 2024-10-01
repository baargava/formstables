import { useState } from 'react'
import Header from './Components/Header'
import Forms from './Routes/Forms'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Tables from './Routes/Tables'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={Forms} />
          <Route path='/forms' Component={Forms} />
          <Route path='/tables' Component={Tables} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
