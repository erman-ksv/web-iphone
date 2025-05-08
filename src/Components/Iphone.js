import React, { useState } from 'react';
import './Iphone.css';
import FooterApps from './Instagram/FooterApps';
import IphoneApps from './IphoneApps';
import battery from './../Photos/Header/Batteryy.png'
import internet from './../Photos/Header/Cellular Connection.png'
import Block from './Instagram/Block';
import Instagram from './Instagram/Instagram';


export default function Iphone() {
  
  const [blocked,setBlocked] = useState(false)
  const [application, setApplication] = useState(false)

  const backToMain = ()=>{
    setApplication(false)
  }

  return (
    <div className="screen">
      <div className="iphone">
        <div className="notch"></div>
        <div className="volume-button up"></div>
        <div className="volume-button down"></div>
        <div className="power-button"></div>
        <div className="header-section">
            <div className="header-time">
              {blocked ? <div className="time-top"></div> :
                <></>
                } 
            </div>    
            <div className="header-symbols">
                <img src={internet} alt="" />
                <img src={battery} alt="" />
            </div>
        </div>

        <div className="section-main">
          {blocked ? 
            <div className="main-in">
              <>
                {
                  !application ? 
                    <div className="apps">
                      <IphoneApps  setApplication={setApplication} />
                      <div className="dock">
                        <FooterApps/>
                      </div>
                    </div> : 
                    <Instagram setApplication={setApplication} />
                }
              </>
            </div> 
              :
            <Block setBlocked={setBlocked} blocked={blocked} />
          }
          
        </div>
        {(application & blocked) ? 
          <div className="btnBackToMain"  onClick={backToMain}>
            <div className="btnBackMain"></div>
          </div> : <></>  
        }
      </div>
    </div>
  );
}
