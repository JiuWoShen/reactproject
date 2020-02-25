import { act } from "react-dom/test-utils";

let oDefaultState = {
    aList:['学习html','学习css','学习JavaScript','学习jQuery'],
    sTodo:''
}

let reducer = (state=oDefaultState,action)=>{
    // 接收一个工单
    if(action.type==='change_val'){
        // 将state的值深拷贝一份
        let oNewState = JSON.parse(JSON.stringify(state));
        oNewState.sTodo = action.value

        //  最终返回一个最新的数据
        return oNewState
    }
    return state
}

export default reducer