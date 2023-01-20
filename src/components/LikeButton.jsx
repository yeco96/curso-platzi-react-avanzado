import React from 'react'
import styled from 'styled-components'
import { MdFavoriteBorder, MdFavorite, MdHourglassFull } from 'react-icons/md'

export const LikeButton = ({ liked, likes, loading, onClick }) => {
  return (
    <>
      {
      loading
        ? <MdHourglassFull size='32px' />
        : (
          <Button onClick={onClick}>
            {liked
              ? <MdFavorite color='red' size='32px' />
              : <MdFavoriteBorder color='gray' size='32px' />}
            <span>{likes} Likes!</span>
          </Button>
          )
    }
    </>
  )
}

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`
