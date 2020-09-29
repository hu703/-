import React from 'react'

import app_bar_plate_3 from '../../img/app_bar_plate_3.png'
import P01_03 from '../../img/P01_03.gif'

export default class Jx_Content extends React.Component{
    render(){
        return (
            <div style={{width:"100%",height:"100%",position:"relative"}}>
                <img src={app_bar_plate_3}/>
                <div style={{width:"300px",position:"absolute",top:"15px",left:"20px"}}>
                    <img src={P01_03} style={{width:"100%"}}/>
                </div>
            </div>
        )
    }
}