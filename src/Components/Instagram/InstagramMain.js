import React from 'react'
import './InstagramMain.css'
import InstagramMainTop from './InstagramMainTop'

export default function InstagramMain({user},setIsSiging) {
  return (
    <div>
    
      {
      // user ? 
        <InstagramMainTop user={user} setIsSiging={setIsSiging}/>
        // : 
        // console.log("Error")
      }
    </div>
  )
}
