import React from 'react'
import './FooterApps.css'
import call from './../../Photos/Footer/Phone.png'
import store from './../../Photos/Footer/Safari.png'
import sms from './../../Photos/Footer/Messages.png'
import music from './../../Photos/Footer/Music.png'

export default function FooterApps() {
    const apps = [
        {
            name: "box-call",
            src: call
        },
        {
            name: "box-store",
            src: store
        },
        {
            name: "box-sms",
            src: sms
        },
        {
            name: "box-music",
            src: music
        }
    ]
  return (
    <>
      {apps.map((item) => 
        <img className={`footer-app, ${item.name} `} src={item.src} alt='img'/>
      )}
    </>
  )
}
