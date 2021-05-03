import React from 'react'
import PlaylistHeader from './PlaylistHeader'

export default function Header (){
    return (
        <div className="header">
            <div className="Title">    
                <h1>Jaden's Playlist Maker</h1>
            </div>
          <div className="playlistHeader">    
                 <PlaylistHeader/>
            </div>
           
        </div>
    )
}