console.log('Start app.js!!!')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')

console.log('----------using isString------')
console.log(_.isString(true))
console.log(_.isString('Luis'))
console.log('----------using uniq------')
let filteredArray = _.uniq(['loconluis', 'monalocon', 'loconluis', 'monalocon', 1, 2, 3])
console.log(filteredArray)




// let add = notes.add(-10, 20)
// console.log(`result for add function is ${add}`)
// let user = os.userInfo()
// console.log('user info:', user)

// fs.appendFile('notes.txt', `Hello ${user.username}! you're: ${notes.age} ${notes.addNote()}`)