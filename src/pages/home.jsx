import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories.jsx'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards.jsx'

export function Home () {
  const { id } = useParams()
  let idint = 0

  switch (id) {
    case 'cats' : {
      idint = 1
      break
    }
    case 'dogs' : {
      idint = 2
      break
    }
    case 'hamsters' : {
      idint = 3
      break
    }
    case 'rabbits' : {
      idint = 4
      break
    }
    case 'birds' : {
      idint = 5
      break
    }
    case 'fishes' : {
      idint = 6
      break
    }
    default: {
      idint = null
    }
  }

  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={idint} />
    </>
  )
}
