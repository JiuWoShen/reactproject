import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Father extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'father',
            iNum:0
        }
    }

    // 定义一个接受参数的方法，这个方法会将这个参数设置到state中-------解构赋值
    fnGetData=(iNum)=>{
        this.setState({ iNum })
    }

    render() {
        return (
            <div>
                <h1>这是父组件</h1>
                <p>显示从子组件传过来的值：{this.state.iNum}</p>
                {/* 父传子，将父组件的值通过props传给子组件 */}
                {/* 将父组件的一个方法传递到子组件的props属性上 */}
                <Son1 name={this.state.name} fnSetData={ this.fnGetData } />
                <Son2 iNum={this.state.iNum} />
            </div>
        );
    }
}

class Son1 extends Component {
    render() {
        return (
            <div>
                <h3>这是子组件</h3>
                <p>这是父组件传过来的值{ this.props.name }</p>
                <input type='button' value='传值给父组件' onClick={()=>this.props.fnSetData(15)} />
            </div>
        );
    }
}

// 同级组件之间传值----通过父组件做中转
class Son2 extends Component {
    render() {
        return (
            <div>
                <h3>这是子组件1穿过来的值{ this.props.iNum }</h3>
            </div>
        );
    }
}


ReactDOM.render(<Father />, document.getElementById('root'));

