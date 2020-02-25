import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import cat from './components/cat.png'

class Mouse extends Component{
    constructor(props){
        super(props)
        this.state = {
            x:0,
            y:0
        }
    }

    fnGetMouse=(e)=>{
        // console.log(e.clientX)
        this.setState({
            x:e.clientX,
            y:e.clientY,
        })
    }

    // 组件挂载到页面上的时候执行
    componentDidMount(){
        window.addEventListener('mousemove',this.fnGetMouse)
    }

    //在组件销毁之前解除事件绑定来优化组件
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.fnGetMouse)
    }

    render(){
        /* let {y} = this.state
        return (
            <div>
                <p>x:{this.state.x}</p>
                <p>y:{y}</p>
            </div>
        ) */

        // 鼠标组件-------返回props的方法调用------鼠标的位置
        // return this.props.fnShow( this.state )

        return this.props.children( this.state )
    }
}

// 猫的组件-------接收参数设置图片的位置
function Cat(props){
    return <img src={cat} alt='猫' style={{'position':'fixed','left':props.x,'top':props.y}} />
}

// 渲染-----------------函数------将鼠标位置作为参数---传给猫组件
// ReactDOM.render(<Mouse fnShow={ (mouse)=><Cat x={mouse.x} y={mouse.y} /> } />, document.getElementById('root'));

// 展开运算符
// ReactDOM.render(<Mouse fnShow={ mouse=><Cat {...mouse} /> } />, document.getElementById('root'));

// render-props模式改写成children属性实现的形式------双标签：
ReactDOM.render(<Mouse>{ mouse =><Cat {...mouse} />  }</Mouse>, document.getElementById('root'));



