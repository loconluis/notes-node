console.log('Starting note.js!')

// Adding note function
let addNote = (title, body) => {
  console.log('Adding note', title, body)
}

// List notes function
let listNotes = () => {
  console.log('Take a look for this notes \n >allnotes object here<')
}

// Remove a single note function
let removeNote = (title) => {
  console.log(`Removing note with title ${title}!`)
}

// Read a single note function
let readNote = (title) => {
  console.log(`Reading ${title} note`)
}
module.exports = {
  addNote,
  listNotes,
  removeNote,
  readNote
}
