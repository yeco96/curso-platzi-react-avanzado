import { db } from '../adapterOld.js'

export function find ({ id, favs = [] }) {
  const photo = db
    .get('photos')
    .find({ id: +id })
    .value()
  return {
    ...photo,
    liked: favs.includes(id.toString())
  }
}

export function addLike ({ id }) {
  return db
    .get('photos')
    .find({ id: +id })
    .update('likes', (likes) => likes + 1)
    .write()
}

export function removeLike ({ id }) {
  return db
    .get('photos')
    .find({ id: +id })
    .update('likes', (likes) => likes - 1)
    .write()
}

export function list ({ categoryId, ids, favs = [] }) {
  let photos
  if (categoryId && categoryId !== 'all') {
    photos = db
      .get('photos')
      .filter({ categoryId: +categoryId })
      .value()
  } else if (ids) {
    photos = db
      .get('photos')
      .filter((photo) => ids.includes(photo.id.toString()))
      .value()
  } else {
    photos = db.get('photos').value()
  }

  return photos.map((photo) => ({
    ...photo,
    liked: favs.includes(photo.id.toString())
  }))
}
