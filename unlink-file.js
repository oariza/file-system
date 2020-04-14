const fs = require('fs')

fs.unlink('./write.txt', (error) => {
    if (error) {
        console.log('Hubo un error al eliminar archivo')
        return      //salida temprana
    }
    console.log('Se eliminó correctamente el archivo')
})