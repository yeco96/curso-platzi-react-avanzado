import React from 'react'
import { PhotoCard } from '../components/PhotoCard.jsx'
import { useGetSinglePhoto } from '../hoc/useGetSinglePhoto.js'

export const PhotoCardWithQuery = ({ id }) => {
  console.log(id)
  const { loading, data, error } = useGetSinglePhoto(id)

  if (loading) return <h4>Loading...</h4>
  if (error) return <h1>Error</h1>

  const { photo = {} } = data

  return <PhotoCard {...photo} />
}
