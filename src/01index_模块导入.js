import React from 'react';
import ReactDOM from 'react-dom';

// 导入文件
import {inum,stri,oPerson} from './components/modal'

// 导入样式
import './components/main.css'

// 导入图片
import cat from './components/cat.png'

function App(){
    return (
        <div>
            <p>{inum}</p>
            <p>{stri}</p>
            <p>{oPerson.name}</p>
            <p>{oPerson.age}</p>
            <img src={cat} alt='这是一只猫' />
            {/* ./表示的是public文件夹的根目录，因为默认跑的是public文件夹---------图片路径要是 ./ 写法---需要将图片放至public文件夹 */}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

