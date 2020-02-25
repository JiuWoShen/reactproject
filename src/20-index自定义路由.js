import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import './components/main.css'

import {HashRouter,Route,Link,Switch,Redirect} from 'react-router-dom'

function Page01(){
    return <h1>这是Page01页面</h1>
}
function Page02(){
    return <h1>这是Page02页面</h1>
}
function Page002(){
    return <h1>这是Page002页面</h1>
}
function Page03(){
    return (
        <ul>
            <li><Link to='/page03/detail/1001'>新闻标题1</Link></li>
            <li><Link to='/page03/detail/1002'>新闻标题2</Link></li>
            <li><Link to='/page03/detail/1003'>新闻标题3</Link></li>
        </ul>
    )
}

// 新闻详情页面组件
function Detail(props){
    return <h2>这是新闻详情页面,新闻ID:{props.match.params.newsId}</h2>
}

// 404页面组件
function NotFound(){
    return <h2>你找的页面不存在</h2>
}

let IsLogin=false

class App extends Component {
    render() {
        return (
            // HashRouter是外面的容器标签
            <HashRouter>
                {/* <Link className='active' to='/'>跳转到页面1</Link>&nbsp;&nbsp;&nbsp;
                <Link to='/page02'>跳转到页面2</Link>&nbsp;&nbsp;&nbsp;
                <Link to='/page03'>跳转到页面3</Link> */}

                <CustomLink label='页面1' to='/page01' />&nbsp;&nbsp;&nbsp;
                <CustomLink label='页面2' to='/page02' />&nbsp;&nbsp;&nbsp;
                <CustomLink label='页面3' to='/page03' exact={true} />


                <hr />
                {/* 
                    路由默认是模糊匹配，”/page02“ 也匹配”/“
                    如果希望精确匹配，可以加上exact属性
                */}
                <Switch>
                    <Route path='/page01' component={Page01} />
                    <Route path='/page02' render={()=>{
                        if(IsLogin){
                            return <Page02 />
                        }else{
                            return <Page002 />
                        }
                    }} />

                    {/* page3有子页面-----因此跳转到page3页面需要精确路径 */}
                    <Route exact path='/page03' component={Page03} />
                    <Route path='/page03/detail/:newsId' component={Detail} />

                    {/* 重定向 */}
                    <Redirect  exact from='/' to='/Page01' />

                    {/* 404页面 */}
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        );
    }
}

// 自定义路由组件
function CustomLink({label,to,exact}){
    return <Route path={to}
        exact={exact} 
        children={({match})=>(
            <Link to={to} className={match?'active':''}>{label}</Link>
        )}
    />
}


ReactDOM.render(<App />, document.getElementById('root'));




