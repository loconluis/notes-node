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
    console.log(`A new note was create with\n--\ntitle: ${note.title}\nbody: ${note.body}`)
  }
} else if (command === 'list') {
  // List the notes
  notes.listNotes()
} else if (command === 'read') {
  // Read a single note
  notes.readNote(argv.title)
} else if (command === 'remove') {
  // Remove a single note
  notes.removeNote(argv.title)
} else {
  // Not matching command
  console.log('Not recognized!')
}
