import React from 'react'
import { doSignOut } from '../../firebase/auth'
import { auth } from '../../firebase/firebase'
import './InstagramMainTop.css'

export default function InstagramMainTop({user},setIsSiging) {
  
  
  return (
    <div className='instagram-top'>
      <div className="instagram-camera-top"></div>
    </div>
  )
}
