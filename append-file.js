const fs = require('fs')

fs.appendFile('write.txt', 'Nuevos datos', 'utf8', (error) => {
    if (error) {
        console.log('Hubo un error al agregar nuevos datos al archivo')
        return      //salida temprana
    }
    console.log('Se agregaron nuevos datos al archivo')
})