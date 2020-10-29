const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const cors = require('cors');

app.use(cors());

http.listen(5000, ()=>{
    console.log("Running on port *5000")
})

io.on('connection', socket=>{
    console.log(`a user connected ${socket.id}`)

    socket.on("order-product", (product)=>{
        Object.assign(product, {userId: socket.id})
        socket.broadcast.emit("order-product", product)
    })

    socket.on("deliver-product", alert => {
        socket.broadcast.emit("deliver-product", alert)
    })
})