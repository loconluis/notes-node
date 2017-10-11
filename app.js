console.log('Start app.js!!!')

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.argv

let command = argv._[0]
console.log('Command: ', command)
// console.log('Process: \n', process.argv)
// console.log('Yargs: \n', argv)

if (command === 'add') {
  // Add a new note
  let note = notes.addNote(argv.title, argv.body)
  if (!note) {
    console.log('A note with the same title exists! Try with other title')
  } else {
    console.log('Creating note...')
    printNote(note.title, note.body)
  }
} else if (command === 'list') {
  // List the notes
  notes.listNotes()
} else if (command === 'read') {
  // Read a single note
  const singleNote = notes.readNote(argv.title)
  if (singleNote) {
    console.log('Reading note...')
    printNote(singleNote.title, singleNote.body)
  } else {
    console.log(`Note not found. Try again!`)
  }
} else if (command === 'remove') {
  // Remove a single note
  let removeNote = notes.removeNote(argv.title)
  let message = removeNote ? 'Note was removed' : 'Note not found. Try again!'
  console.log(message)
} else {
  // Not matching command
  console.log('Not recognized!')
}

function printNote (title, body) {
  console.log(`--\ntitle: ${title}\nbody: ${body}`)
}
