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
  notes.addNote(argv.title, argv.body)
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
