import {createStore} from 'redux'

// 导入数据仓库
import reducer from './reducer'

// 创建一个数据仓库管理员，关联数据仓库（reducer）
let store = createStore(reducer)

export default store