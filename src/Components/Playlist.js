import React, { Component } from 'react'
import axios from 'axios'

export default class Playlist extends Component{
    constructor(props){
        super(props)
        this.state={
            playlist : []
        }
    }
    componentDidMount(){
        
        axios.get('/api/songs')
        .then(res=> this.setState({playlist: res.data}))
        .catch(err=> console.log(err))
    }
    render(){
        return(
            <div className="playlist-container">
                <ul className="playlist">
                    {this.props.playlistArr.map(song=> (
                    <li className="playlist-item">
                       {song.title} by {song.artist}
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}