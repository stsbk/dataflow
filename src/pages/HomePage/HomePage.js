import React from 'react';
import './styles.css';
import Logo from '../../static/Logo.svg';
import Dropdown from "../../components/Dropdown/Dropdown";
import MainInfo from "../../components/MainInfo/MainInfo";
import Progress from "../../components/Progress/Progress";
import ExportInfo from "../../components/ExportInfo/ExportInfo";

export default function HomePage() {
    return(
      <div className='container'>
          <div className='items'>
              <p className='img'>
                  <img src={Logo} alt='Dataflow Security'/>
              </p>
          </div>
          <div className='mainBlock'>
              <div className='header'>
                  <div className='topnav'>
                      <a href="#">IOS</a>
                      <a href="#">ANDROID</a>
                      <a href="#">DESKTOP</a>
                  </div>
                  <label>
                      <input type="text" placeholder="Search"/>
                  </label>
                  <Dropdown/>
              </div>
              <div className='content'>
                  <div className='mainContent'>
                      <div className='steps'>
                          <span>IOS > RCE > RCE Item 2 </span>
                      </div>
                      <div className='info'>
                          <MainInfo/>
                          <div className='aside'>
                              <Progress/>
                              <ExportInfo/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='footer'>
                  <small>© 2021 Dataflow S.r.l, All Rights Reserved</small>
              </div>
          </div>
      </div>
    )
}
