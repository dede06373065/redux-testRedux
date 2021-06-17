/**该文件汇总左右reducer */
import countReducer from "./count";
import personReducer  from "./person";
import {combineReducers } from 'redux'
const allReducers= combineReducers({
    sum:countReducer,
    people:personReducer
})

export default allReducers