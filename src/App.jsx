import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { FormPage } from '../pages/form_page'
import { SuccessPage } from '../pages/success_page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormPage/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
