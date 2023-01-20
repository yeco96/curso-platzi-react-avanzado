import { useMutation, gql } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
  likeAnonymousPhoto(input: $input) {
    id,
    liked,
    likes
  }
}
`

export const useLikeAnonymousPhoto = () => {
  const [likePhoto, { data, loading, error }] = useMutation(LIKE_PHOTO)
  return [likePhoto, { data, loading, error }]
}
