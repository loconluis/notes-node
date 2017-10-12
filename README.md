# Notes-App

 Es una aplicacion de terminal que funciona por comandos.

 Ejemplo:
  - `$ node app.js add --title='Hello!' --body='Imagine this is a Lorem Ipsum'`

  ### Instalacion 

  Notes-app requiere [Node.js](https://nodejs.org/) v6+ to run.

  Instala las depedendecias y corre la aplicación.

  ```
  $ cd notes-app
  $ npm install
  $ node app.js <comando> <argumentos>*
  ```

  ### ¿Como usar?

  | Comando |  Función |
| ------ | ------ |
| add | Agrega una nueva nota, recibe dos argumentos <--title> y <--body> de la nota |
| read | Lee una nota guardada, recibe un argumento <--title> |
| list | Lista todas las notas que estan guardadas |
| remove | Elimina una nota, recibe un argumento <--title> |

Argumentos que puede recibir un comando

| Argumentos | Función |
| ------ | ------ |
| --title <-t> |  Titulo de la nota |
| --body <-b> |  Cuerpo de la nota |


Code with ♥ by [LoconLuis](https://twitter.com/loconluis)