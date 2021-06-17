import React, { Component } from 'react'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import { connect } from 'react-redux'

class Count extends Component {
    increment = () => {
        const { value } = this.number
        this.props.add(value * 1)
    }
    decrement = () => {
        const { value } = this.number
        this.props.min(value * 1)
    }
    incrementIfOdd = () => {
        const { value } = this.number
        if (this.props.count % 2 !== 0) {
            this.props.add(value * 1)
        }
    }
    incrementAsync = () => {
        const { value } = this.number
        this.props.asyncAdd(value * 1, 500)
    }
    render() {
        return (
            <div>
                <h1>Sum is:{this.props.count}and the people number is {this.props.peopleNum}</h1>
                <select ref={c => this.number = c}>
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
export default connect(
    state => ({ count: state.sum,peopleNum:state.people.length}),//映射状态
    //mapDispatch简写
    {
        add: createIncrementAction,
        min: createDecrementAction,
        asyncAdd: createIncrementAsyncAction//映射状态方法
    }
)(Count)

