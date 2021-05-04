import React, { Component } from 'react'

export default class PlaylistItem extends Component{
    constructor(props){
        super(props)
        this.state={
            input: ''
        }
    }
    handleInput = (e)=>{
        this.setState({input: e.target.value})
    }

     handleToggleEdit = ()=> {
        this.setState({editMode: true})
    }

    handleSave= ()=>{
        this.props.editSong(this.props.song.id, this.state.input)
        this.setState({editMode: false, input: ''})
    }
    render(){
       const  {song} = this.props
        return(
            <li className="playlist-item">
                    <button className="delete" onClick={()=>this.props.deleteSong(song.id)}>Delete</button>
                      
                        {this.state.editMode ? (
                        <>
                            <input className="titleEdit" placeholder={song.title} onChange={this.handleInput}/>
                            <button onClick={this.handleSave}>Save</button> by {song.artist}
                        </>
                        ):(
                        <>
                        {song.title} by {song.artist}
                       <button className="edit" onClick={()=>this.handleToggleEdit()}>Edit</button>
                       </>
                        )}
                    </li>
        )
    }
}