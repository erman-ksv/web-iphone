import React from 'react'
import './IphoneApps.css'
import instagram from './../Photos/Apps/instagram.png'
// import ios18 from './../Photos/Apps/ios18.png'
// import photo from './../Photos/Apps/photo.png'
// import weather from './../Photos/Apps/weather.png'

export default function IphoneApps({setApplication}) {
    // const apps = [
    //     {
    //         name: "iOS 18",
    //         src: ios18
    //     },
    //     {
    //         name: "Weather",
    //         src: weather
    //     },
    //     {
    //         name: "Photo",
    //         src: photo
    //     },
    //     {
    //         name: "Instagram",
    //         src: instagram
    //     },
    // ]

    const openInstagram = (e) =>{
      e.preventDefault()
      setApplication(true)
    }
       

  return (
    
    <>
        <div className='app-box' onClick={(e)=> {openInstagram(e)}} >
            <img src={instagram} className={'app-Instagram'} alt="img" />
            <p className='app-name'>Instagram</p>
        </div>
    </>
  )
}


