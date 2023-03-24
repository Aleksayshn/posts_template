import React from 'react'
import s from './Iframe.module.css'

export const Iframe = () => {
    return (
        <iframe className={s.iframeEl}
            title="Target"
            src="https://giphy.com/embed/sk31Y71xK3l7xW5osJ"
            referrerPolicy="no-referrer"
            allow="autoplay; fullscreen"
        // sandbox="allow-scripts allow-popups"
        ></iframe>
    )
}