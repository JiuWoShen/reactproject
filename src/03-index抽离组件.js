import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './components/main.css';

// 导入拆分组件
import List from './components/list'


class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            aList:['学习html','学习css'],
            sTodo:''
        }
    }

    fnChange=(e)=>{
        this.setState({
            sTodo:e.target.value
        })
    }

    fnAdd=()=>{
        this.setState(state=>{
            if(state.sTodo.trim()===''){
                alert('请输入计划内容！');
                return
            }

            return {
                aList:[...state.aList,state.sTodo],
                sTodo:''
            }

        })
    }

    fnDel=(i)=>{
        this.setState(state=>{
            state.aList.splice(i,1);
            return {
                aList:state.aList
            }
        })
    }

    render() {
        let { aList,sTodo } = this.state
        return (
            <div className="list_con">
                <h2>To do list</h2>
                <input type="text" value={ sTodo } onChange={ this.fnChange }  className="inputtxt" />
                <input type="button" name="" value="增加" id="btn1" className="inputbtn" onClick={ this.fnAdd } />
                
                {/* 渲染抽离的组件 */}
                <List aList={ aList } fnDel={ this.fnDel } />

            </div>
        );
    }
}





ReactDOM.render(<Todolist />, document.getElementById('root'));



