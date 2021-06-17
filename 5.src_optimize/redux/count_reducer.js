import {INCREMENT,DECREMENT} from './constant'
const initState=0
export default function countReducer(preState=initState, action) {
    const { type, data } = action
    //from action getting type and data and according to type
    //decide how to get the data
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState

    }


}