console.log('Starting note.js!')

const fs = require('fs')

let fetchNotes = () => {
  try {
    // reading file a stringify
    let notesString = fs.readFileSync('notes-data.json')
    // Parsing to a JSON
    return JSON.parse(notesString)
  } catch (e) {
    // el archivo no esta creado
    return []
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  console.log('saving data!')
}

// Adding note function
let addNote = (title, body) => {
  let notes = fetchNotes()

  let note = {
    title,
    body
  }

  let duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

// List notes function
let listNotes = () => {
  console.log('Take a look for this notes \n >allnotes object here<')
}

// Remove a single note function
let removeNote = (title) => {
  let notes = fetchNotes()
  let arr = notes.filter(note => note.title !== title)
  saveNotes(arr)
  // Return a bool if was remove it or not!
  return notes.length !== arr.length
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
