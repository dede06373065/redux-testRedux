import React, { Component } from 'react'
import store from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
 
    increment=()=>{
        const {value}=this.number
        store.dispatch(createIncrementAction(value*1))
    }

    decrement=()=>{
        const {value}=this.number
        store.dispatch(createDecrementAction(value*1))
    }

    incrementIfOdd=()=>{
        const {value}=this.number
        const count=store.getState()
        if(count%2!==0){
            store.dispatch(createIncrementAction(value*1))
        }

    }
    incrementAsync=()=>{
        const {value}=this.number
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1))
        },500)

    }
    render() {
        return (
            <div>
                <h1>Sum is:{store.getState()}</h1>
                <select ref={c=>this.number=c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>The result is odd then plus</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>This is async plus</button>
                
            </div>
        )
    }
}
