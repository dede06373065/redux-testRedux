import CountUI from '../../components/Count'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

import {connect} from 'react-redux'
function mapStateToProps(state){
    return {count:state}
}
function mapDispatchToProps(dispatch){
    return {
        add:number=>dispatch(createIncrementAction(number)),
        min:number=>dispatch(createDecrementAction(number)),
        asyncAdd:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    } 
}

export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

