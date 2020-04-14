const fs = require('fs')

fs.readdir('new-dir', 'utf8', (error, files) => {
    if (error) {
        console.error('Error al leer contenido de carpeta', error)
        return
    }
    console.log('El contenido de la carpeta es: ', files)
})