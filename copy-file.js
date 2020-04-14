const fs = require('fs')

fs.copyFile('write.txt', 'write-copy.txt', (error) => {
    if (error) {
        console.error('Error al copiar archivo', error)
        return
    }
    console.log('El archivo se copió correctamente')
})