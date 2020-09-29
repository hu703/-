import React from 'react'
import ReactDom from 'react-dom'

import Header from './components/index/header'
import Content from './components/index/content'
import Footer from './components/index/footer'

import 'antd/dist/antd.css';
import './css/style.css'

class Index extends React.Component{
    render(){
        return (
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}


ReactDom.render(
    <Index></Index>,
    document.getElementById("root")
)