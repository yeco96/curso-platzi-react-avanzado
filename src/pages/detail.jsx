import React from 'react'
import { useParams } from 'react-router-dom'
import { PhotoCardWithQuery } from '../views/PhotoCardWithQuery.jsx'

export const Detail = ({ detailId }) => {
  const params = useParams()
  console.log(params)
  return <PhotoCardWithQuery id={params.id} />
}
