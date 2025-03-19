import React from 'react'
import Links from '../../constants/Links.ts'

const Video = () => {
    return (
        <div>
            <div className="yt-wrapper w-3xl">
                <div className="yt-frame-container ">
                    <iframe className="NoInteract" width="560" height="315"
                        src={Links.cinematic + "?controls=0&mute=1&autoplay=1&loop=1&showinfo=0&controls=0&autohide=1"}
                        title="YouTube video player"
                        allow="autoplay; encrypted-media;"
                        referrerPolicy="strict-origin-when-cross-origin">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default Video