import React from 'react'
import ReactDom from 'react-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import app_bar_plate_2 from '../../img/app_bar_plate_2.png'
  import app_bar_more from '../../img/app_bar_more.png'


  import Jx_Content from './jx-content'


export default class Content extends React.Component{
    render(){
        return (
            <div className="content-box">
                <img src={app_bar_plate_2}/>
                <img src={app_bar_more} className="content-cd"/>
                <Router>
                    <nav className="content-title">
                        <ul>
                            <li style={{borderBottom:"1px solid whitesmoke"}}>
                            <Link to="/" className="link" style={{fontWeight:"bold"}}>精选</Link>
                            </li>
                            <li>
                            <Link to="/cnxh" className="link">猜你喜欢</Link>
                            </li>
                            <li>
                            <Link to="/my" className="link">母婴</Link>
                            </li>
                            <li>
                            <Link to="/sp" className="link">食品</Link>
                            </li>
                            <li>
                            <Link to="/nz" className="link">女装</Link>
                            </li>
                            <li>
                            <Link to="/cz" className="link">彩妆</Link>
                            </li>
                            <li>
                            <Link to="/xh" className="link">洗护</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/">
                        <Jx_Content />
                        </Route>
                    </Switch>
                </Router>
                
            </div>
        )
    }
}