import React, { Component } from 'react'
import axios from 'axios'
import PlaylistItem from './PlaylistItem'

export default class Playlist extends Component{
    constructor(props){
        super(props)
        this.state={
            playlist : [],
            editMode: false
        }
    }

    componentDidMount(){
        axios.get('/api/songs')
        .then(res=> this.setState({playlist: res.data}))
        .catch(err=> console.log(err))
    }
    handleToggleEdit = ()=> {
        this.setState({editMode: true})
    }
    render(){
        return(
            <div className="playlist-container">
                <ul className="playlist">
                    {this.props.playlistArr.map(song=> (
                    <PlaylistItem key={song.id} deleteSong={this.props.deleteSong} editSong={this.props.editSong} song={song}/>
                    ))}
                </ul>
            </div>
        )
    }
}