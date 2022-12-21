

const http = require('http')

http.createServer( (req, res) => {

    // res.setHeader('Content-Disposition', 'attchment; filename=lista.csv')
    // res.writeHead(200, {'Content-Type': 'text/plain'})

    // res.write( 'id, nombre\n' )
    // res.write( '1, Oscar\n' )
    // res.write( '2, Juan\n' )
    // res.write( '3, Pedro\n' )
    // res.write( '4, Jose\n' )
    // res.write( '5, Patricia\n' )
    // const persona = {
        //     id: 1,
        //     nombre: 'Luis'
        // }
        
        // res.write(JSON.stringify(persona))
        // res.end()
        
        res.write('Hola mundo')
        res.end()

}) 

.listen(8080)

console.log('Escuchando', 8080);