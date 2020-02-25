import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import './components/main.css'

import {HashRouter,Route,Link,Switch,Redirect} from 'react-router-dom'
import { func } from 'prop-types';

function Login(props){
    return (
        <form>
            <h2>用户登录</h2>
            <p>
                <label>用户名：</label>
                <input type='text' />
            </p>
            <p>
                <label>密&nbsp;&nbsp;&nbsp;码：</label>
                <input type='password' />
            </p>
            <p>
                <input type='button' value='登录' onClick={()=>props.history.push('/main')} />
            </p>
        </form>
    )
}

function Con01(){
    return <h2>右侧内容1</h2>
}
function Con02(){
    return <h2>右侧内容2</h2>
}
function Con03(){
    return <h2>右侧内容3</h2>
}

function Main(){
    return (
        <div>
            <div className='menu'>
                <Link to='/main'>菜单一</Link><br /><br />
                <Link to='/main/con02'>菜单二</Link><br /><br />
                <Link to='/main/con03'>菜单三</Link>

            </div>
            <div className='content'>
                {/* 创建子路由不用HashRouter标签，直接写Route */}
                <Route exact path='/main' component={Con01} />
                <Route path='/main/con02' component={Con02} />
                <Route path='/main/con03' component={Con03} />
            </div>
        </div>
    )
}

class App extends Component{
    render(){
        return (
            <HashRouter>
                <Route exact path='/' component={Login} />
                <Route path='/main' component={Main} />
            </HashRouter>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));




