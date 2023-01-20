import { useQuery, gql } from '@apollo/client'

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetPhotos = categoryId => {
  const { loading, data, error } = useQuery(getPhotos, { variables: { categoryId } })
  return { loading, data, error }
}
