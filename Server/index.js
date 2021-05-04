const express = require('express')
//require express
const app = express()
const PORT = 4242;
//app instance
const songCtrl = require('./Controllers/songController')
//import controllers
app.use(express.json())
//top level middleware
app.get('/api/songs', songCtrl.getSongs)
app.post('/api/songs', songCtrl.addSong)
app.delete('/api/songs/:id', songCtrl.deleteSong)
app.put('/api/songs/:id', songCtrl.editSong)

app.listen(PORT, ()=>console.log('server is running'))