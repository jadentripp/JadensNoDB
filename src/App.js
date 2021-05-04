import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header/Header'
import Songlist from './Components/SongList'
import data from './data.json'
import Playlist from './Components/Playlist'
import axios from 'axios'



export default class App extends Component{
  constructor(){
    super()
    this.state = {
      songLibrary: data,
      playlist: []
    }
  }
addSong = (title, artist)=> {
    axios.post('/api/songs', {title, artist})
    .then(res=>this.setState({playlist: res.data}))
    .catch(err=> console.log(err))
}
deleteSong = (id) => {
  axios.delete(`/api/songs/${id}`)
  .then((res)=>{
    this.setState({playlist: res.data})
  })
  .catch((err)=>{
    console.log(err)
  })
}
editSong = (id, title)=>{
  axios.put(`/api/songs/${id}`, {title})
  .then(res=> {
    this.setState({playlist: res.data})
  })
  .catch(err=>{
    console.log(err)
  })
}
  render(){
    return (
      <div>
        <Header /> 
        <div className="body">
        <Songlist songs={this.state.songLibrary} addSong={this.addSong}/>
        <Playlist playlistArr ={this.state.playlist} deleteSong={this.deleteSong} editSong={this.editSong}/>
        </div>
      </div>
    )
  }
}