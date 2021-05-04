import React, { Component } from 'react'
import channelOrange from './channelOrange.jpeg'


export default class SongList extends Component {
    constructor(props){
        super(props)
        this.state={
            songArr: props.songs,
        }
}


    render(){
        return(
            <div>
                <ul className="songList">
                  {this.state.songArr.map(song=>
                    <li className="song">       
                    <img className="channelOrange" src={channelOrange} alt="Channel Orange Album Cover"/>
                    {song.title} 
                    <br></br>
                    By {song.artist}
                    <button onClick={()=>this.props.addSong(song.title, song.artist)}>Add Song To Playlist</button>
                    <button onClick={()=>this.props.playSong(song.path)}>Play Song</button>
                    </li>)}       
                </ul>    
            </div>
        )
    }
    }