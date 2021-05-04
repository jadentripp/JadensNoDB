const e = require("express")

songs = []
let id = 1

module.exports = {
  getSongs: (req, res) => {
    res.status(200).send(songs)
  },
  addSong:(req, res) => {
    const {title, artist}= req.body
    song = {
      title,
      artist,
      id
    }
    id++
    songs.push(song)
    res.status(200).send(songs)
  },
  deleteSong:(req, res) => {
   const {id} = req.params
   const index = songs.findIndex((e) =>{
     return e.id = id
   })
   songs.splice(index, 1)
   res.status(200).send(songs)
  },
  editSong:(req, res) => {
     const {id} = req.params
     const {title} = req.body
     const index = songs.findIndex((e) =>{
     return e.id = id
   })
   songs[index] = {
     ...songs[index],
     title: title || songs[index].title
   }
   res.status(200).send(songs)
  }
}