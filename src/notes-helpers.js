/* eslint-disable eqeqeq */

export const findFolder = (folders=[], folderId) => {
  console.log('FindFoldersId', folderId)
  return folders.find(folder => folder.id == folderId) 
} // TODO changed to ==

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id == noteId)

export const getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId == folderId)
)

export const countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId == folderId).length
