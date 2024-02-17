import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import Dashboard from './utils/JSX/dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import { createStore } from 'redux'

import Store from './store'
import User from './utils/JSX/user'
function App() {
  

  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Dashboard />} ></Route>
            <Route path='/user' element={< User />}></Route>
          </Routes>


        </BrowserRouter>

      </Provider>
    
    </>
   
  )
}

export default App
