import React from 'react'
import { Home } from './pages/home.jsx'
import { Detail } from './pages/detail.jsx'
import { Favs } from './pages/Favs.jsx'
import { User } from './pages/User.jsx'
import { NotRegisteredUser } from './pages/NotRegisteredUser.jsx'
import { NavBar } from './components/NavBar.jsx'
import { Logo } from './components/Logo.jsx'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}
// const [isLogged, setIsLogged] = useState(true);

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
          <Route path='/favs' element={UserLogged.isAuth ? <Favs /> : <Navigate to='/login' />} />
          <Route path='/user' element={UserLogged.isAuth ? <User /> : <Navigate to='/login' />} />
          <Route path='/login' element={<NotRegisteredUser />} />
        </Routes>
        <NavBar />
      </BrowserRouter>

    </>
  )
}
