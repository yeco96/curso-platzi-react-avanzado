import React from 'react'
import styled from 'styled-components'
import { PhotoCard } from './PhotoCard.jsx'

export const ListOfPhotoCards = () => (
  <Ul>
    {[1, 2, 3, 5, 6, 7].map((item) => <PhotoCard key={item} id={item} />)}
  </Ul>
)

const Ul = styled.div`
  padding: 0;
`
