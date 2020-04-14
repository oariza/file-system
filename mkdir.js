const fs = require('fs')

fs.mkdir('new-dir', (error) => {
    if (error) {
        console.error("Hubo un error al crear la carpeta", error)
    }
    console.log('Se creó correctamente la carpeta')
})