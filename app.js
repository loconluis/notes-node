/* eslint-disable no-debugger */
// const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const argv = yargs.command('add', 'Add a new note', {
  title: {
    describe: 'Title of a note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of a note',
    demand: true,
    alias: 'b'
  }
})
.command('list', 'List all notes')
.command('read', 'read a note', {
  title: {
    describe: 'Title of a note to read',
    demand: true,
    alias: 't'
  }
})
.command('remove', 'Remove a note', {
  title: {
    describe: 'Title of a note to remove',
    demand: true,
    alias: 't'
  }
})
.help()
.argv

let command = argv._[0]

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if (!note) {
    console.log('A note with the same title exists! Try with other title')
  } else {
    console.log('Creating note...')
    notes.printNote(note)
  }
} else if (command === 'list') {
  const fetchNote = notes.listNotes()
  console.log(`Listing ${fetchNote.length} note(s).`)
  fetchNote.forEach(note => notes.printNote(note))
} else if (command === 'read') {
  const singleNote = notes.readNote(argv.title)
  if (singleNote) {
    console.log('Reading note...')
    notes.printNote(singleNote)
  } else {
    console.log(`Note not found. Try again!`)
  }
} else if (command === 'remove') {
  let removeNote = notes.removeNote(argv.title)
  let message = removeNote ? 'Note was removed' : 'Note not found. Try again!'
  console.log(message)
} else {
  console.log('Not recognized!')
}
