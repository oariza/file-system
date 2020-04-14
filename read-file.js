const fs = require('fs')

fs.readFile('write.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Hubo un error al leer el archivo', error)
        return
    }
    console.log('El archivo es:', data)
})