import React from 'react'
import ReactDom from 'react-dom'

import app_bar_plate_1 from '../../img/app_bar_plate_1.png'
import app_bar_scan from '../../img/app_bar_scan.png'
import app_bar_service from '../../img/app_bar_service.png'

import { Input } from 'antd';
export default class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="header-box">
                    <img src={app_bar_plate_1}/>
                    <img src={app_bar_scan} className="bar_scan"/>
                    <Input placeholder="粘贴宝贝标题 先领劵再购物" style={{position:"fixed",top:"13px",left:"62px",paddingLeft:"20px",width:"250px",height:"25px",borderRadius:"15px",fontSize:"12px"}}/>
                    <img src={app_bar_service} className="bar_service"/>
                </div>
            </header>
        )
    }
}