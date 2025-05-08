import React, { useState } from 'react'
import './Instagram.css'
import InstagramLogin from './InstagramLogin'
import InstagramMain from './InstagramMain'


export default function Instagram({setApplication}) {
   const [logined,setLogined] = useState(false)

   const [user, setUser] = useState({
    userName: '',
    userFullName: '',
    userEmail: '',
    userPassword: ''
   })
  return (
    <div className='instagram'>
      {
        !logined ? <InstagramLogin 
                      setLogined={setLogined} 
                      logined={logined} 
                      user={user}
                      setUser={setUser}
                    /> : 
                    <InstagramMain user={user}/>
      }
    </div>
  )
}
