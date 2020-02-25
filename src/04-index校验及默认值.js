import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import propTypes from 'prop-types'

class App extends Component{
    render(){
        return (
            <div>
                <p>总共有{ this.props.iNum }条数据</p>
                <p>性别是{ this.props.gender }</p>
            </div>
        )
    }
}

// 默认值
App.defaultProps={
    iNum:10
}

// 给app组件增加props类型校验
App.propTypes = {
    // iNum必须是数字且必填
    iNum:propTypes.number.isRequired,
    // 性别只能 男 或女
    gender:propTypes.oneOf(['男','女'])
}

ReactDOM.render(<App iNum={10} gender='男' />, document.getElementById('root'));



