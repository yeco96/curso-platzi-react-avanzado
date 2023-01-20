import React from 'react'
import styled from 'styled-components'
import { PhotoCard } from '../photoCard/PhotoCard.jsx'

import { useGetPhotos } from '../../data/useGetPhotos.js'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useGetPhotos(categoryId)
  if (loading) return 'Loading...'
  if (error) return <pre>{error.message}</pre>
  return (
    <Ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </Ul>
  )
}

const Ul = styled.div`
  padding: 0;
`
