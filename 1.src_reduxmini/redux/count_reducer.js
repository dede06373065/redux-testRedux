const initState=0
export default function countReducer(preState=initState, action) {
    const { type, data } = action
    //from action getting type and data and according to type
    //decide how to get the data
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState

    }


}