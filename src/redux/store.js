//创建redux最核心的store对象
import {createStore, applyMiddleware} from 'redux'
// import countReducer from './reducers/count'
// import personReducer from './reducers/person'
import thunk from 'redux-thunk'//引入redux-thunk支持异步action
import {composeWithDevTools} from 'redux-devtools-extension'//引入开发者工具
import allReducers from './reducers'
//汇总所有reducer
// const allReducers= combineReducers({
//     sum:countReducer,
//     people:personReducer
// })
//暴露所有store
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))