import { useQuery, gql } from '@apollo/client'

const getPhoto = gql`
  query getPhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const useGetSinglePhoto = id => {
  const { loading, data, error } = useQuery(getPhoto, { variables: { id } })
  return { loading, data, error }
}
