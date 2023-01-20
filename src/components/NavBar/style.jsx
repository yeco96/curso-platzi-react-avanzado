import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Nav = styled.nav` 
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    height: 50px;
    width: 100%;
    max-width: 500px;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1000;
    font-size: 32px;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  width: 100%;
  text-decoration: none;
`
