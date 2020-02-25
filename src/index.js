import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import './components/main.css'
// 导入数据中心-----导入文件夹默认执行index文件
import store from './store'

class Todolist extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()

        // 组件在初始化时订阅数据中心的修改,
        // 数据中心发生改变会触发 this.fnStoreChange 方法
        // 订阅的subscribe方法执行时，会返回一个取消订阅的方法
        this.unsubscribe=store.subscribe(this.fnStoreChange)
    }

    fnStoreChange(){
        this.setState(store.getState())
    }

    // 组件销毁前取消数据中心的订阅，从而优化组件
    componentWillUnmount(){
        this.unsubscribe()
    }

    fnChange=(e)=>{
        // 定义一个修改数据的工单
        let action ={
            type:'change_val',
            value:e.target.value
        }
        // 提交工单，通过store的dispach方法提交
        store.dispatch(action)
    }

    render(){
        let {aList,sTodo} = this.state
        return (
            <div className="list_con">
                <h2>To do list</h2>
                <input type="text" value={sTodo} onChange={this.fnChange} id="txt1" className="inputtxt" />
                <input type="button" name="" value="增加" id="btn1" className="inputbtn" />
                
                <ul id="list" className="list">
                    {
                        aList.map((item,i)=>(
                            <li key={i}><span>{item}</span><a href="#" className="del">删除</a></li>
                        ))
                    }
                    
                </ul>

	        </div>
        )
    }
}




ReactDOM.render(<Todolist />, document.getElementById('root'));