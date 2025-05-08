import React, { useState } from 'react'
import './Block.css'
import light from './../../Photos/InstBLock/light.png'
import cameraBtn from './../../Photos/InstBLock/blockcamera.png'
import date from './../../Photos/InstBLock/Date.png'
import time from './../../Photos/InstBLock/Time.png'


export default function Block({setBlocked,blocked}) {
  const [styled,setStyled] = useState(false)

  const openBLock = (e) =>{
      e.preventDefault()
      

      setInterval(()=>{
        setBlocked(!blocked)
        },500
      )
      setStyled(!styled)

  }


  return (
    <div className={'block-main' + (styled ? ' blockToOpen' : '')}>
      <div className="block-time">
        <img className='blockTimeDate' src={date} alt="" />
        <img className='blockTimeHour' src={time} alt="" />
      </div>
      <div className="block-symbols">
        <img className='blockSymbolsLight' src={light} alt="" />
        <img className='blockSymbolsCamera' src={cameraBtn} alt="" />
      </div>
      <div className="btn-to-open" onClick={(e)=> {openBLock(e)}}>
          <div className="btnOpen"></div>
      </div>
    </div>
  )
}
