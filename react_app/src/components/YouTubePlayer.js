import React, { Component } from 'react'
import YouTube from 'react-youtube'

class YouTubePlayer extends Component {

  videoOnReady (event) {
    console.log(event.target)
  }

  videoStateChange (event) {
    const player = event.target
    console.log(player.getCurrentTime())
  }

  render () {
    const opts = {
      maxHeight: '390',
      maxWidth: '640'
    }
    const {videoId} = this.props
    return (
        <div style={{textAlign: "center"}}>
            <div style={{margin: 0}}>
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={this.videoOnReady}
                    onPlay={this.videoOnPlay}
                    onStateChange={this.videoStateChange}
                />
            </div>
        </div>
    )
  }
}

export default YouTubePlayer