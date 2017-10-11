
// Convert a json to string
let obj = {
  name: 'Luis',
  lastname: 'Locon',
  age: '24',
  city: 'Guatemala'
}
let stringObj = JSON.stringify(obj)
console.log(typeof stringObj)
console.log(obj)

// Convert a string to json
let personString = '{"name": "Luis", "age": 25}'
let personObj = JSON.parse(personString)
console.log(typeof personObj)
console.log(personObj)

const fs = require('fs')

let originalNote = {
  title: 'Some title',
  body: 'Some bodyx10000'
}
// originalNoteString es una variable que convierte el objeto original para escritura en un archivo
let originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

// noteString lee el archivo y lo mantiene en un string, note lo parsea a JSON
let noteString = fs.readFileSync('notes.json')
// note
let note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)