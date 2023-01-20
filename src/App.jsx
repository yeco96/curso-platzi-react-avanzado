import React from 'react'
import { Home } from './pages/home.jsx'
import { Detail } from './pages/detail.jsx'
import { Logo } from './components/Logo.jsx'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter basename='/'>
        <GlobalStyle />
        <Logo />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photos/:id' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}
