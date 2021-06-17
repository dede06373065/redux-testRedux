// function actionCreateIncrement(data){
//     return {type:'increment',data}
// }
import {INCREMENT,DECREMENT} from './constant'
export const createIncrementAction=data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})

// function actionCreateDecrement(data){
//     return {type:'decrement',data}

// }