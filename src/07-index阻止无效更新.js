import React,{ Component,PureComponent } from 'react';
import ReactDOM from 'react-dom';


class Father extends Component{
    constructor(props){
        super(props)
        this.state = {
            iNum:10
        }
    }

    fnIncrease=()=>{
        this.setState(state=>({iNum:state.iNum+1}))
    }

    render(){
        console.log('父组件更新了')
        return (
            <div>
                <p>{this.state.iNum}</p>
                <input type='button' value='递增' onClick={this.fnIncrease} />
                <Son />
            </div>
        )
    }
}

/*   父组件更新----子组件没有变化也会更新

class Son extends Component {
    render() {
        console.log('子组件更新了')
        return (
            <div>
               <p>这是子组件</p> 
            </div>
        );
    }
} */

class Son extends PureComponent {
    render() {
        console.log('子组件更新了')
        return (
            <div>
               <p>这是子组件</p> 
            </div>
        );
    }
}

ReactDOM.render(<Father />, document.getElementById('root'));




