const express = require('express')

const app = express()

function render (message) {
    const document = `<html>
        <head>
            <title>Welcome/Home</title>
        </head>
        <body>
            <h1>Welcome ${message}</h1>
            
            <h2><marquee>Hope you are doing well!!!!!!!!!</marquee><h2>
        </body>
    </html>`
    return document
}



app.get(
    '/user/:name',
    (request, response) => {
        const message = request.params.name
        const page = render(message)
        response.send(page)
    }
)

const port = 3000

app.listen(
    port,
    () => { 
        console.log(`Listening on :${port}`) 
    }
)