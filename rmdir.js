const fs = require('fs')

let contentArray = fs.readdir('new-dir', 'utf8', (error, files) => {
    if (error) {
        console.error('Error al leer contenido de carpeta', error)
        return
    }
    console.log('El contenido de la carpeta es: ', files)
})

contentArray.forEach((item) => {
    fs.unlink(`new-dir/${item}`, (error) => {
        if (error) {
            console.log('Hubo un error al eliminar archivo')
            return
        }
        console.log('Se eliminó correctamente el archivo')
    })    
})


fs.rmdir('new-dir', (error) => {
    if (error) {
        console.error('Hubo un error al eliminar la carpeta', error)
    }
    console.log('Se eliminó la carpeta correctamente')
})