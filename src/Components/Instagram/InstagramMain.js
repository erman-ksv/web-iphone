import React from 'react'
import './InstagramMain.css'
import InstagramMainTop from './InstagramMainTop'

export default function InstagramMain({user}) {
  return (
    <div>
      {user ? 
        <InstagramMainTop />
        : 
        console.log("Error")
      }
    </div>
  )
}
