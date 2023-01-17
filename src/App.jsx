import React from 'react'
import { ListOFCategories } from './components/ListOFCategories.jsx'
import { ListOfPhotoCards } from './components/ListOfPhotoCards.jsx'
import { Logo } from './components/Logo.jsx'
import { GlobalStyle } from './styles/GlobalStyles.js'

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOFCategories />
    <ListOfPhotoCards />
  </>
)
