console.log('Starting note.js!')

const fs = require('fs')

// Adding note function
let addNote = (title, body) => {
  let notes = []
  let note = {
    title,
    body
  }
  try {
    // reading file a stringify
    let notesString = fs.readFileSync('notes-data.json')
    // Parsing to a JSON
    notes = JSON.parse(notesString)
  } catch (e) {
    // el archivo no esta creado
  }

  let duplicateNotes = notes.filter(note => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    console.log('adding a new note!')
  }
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
