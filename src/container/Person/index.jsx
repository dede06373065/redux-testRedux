import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson=()=>{
        const name=this.nameNode.value
        const age=this.ageNode.value
        const personObj={id:nanoid(),name,age}
        this.props.addPeople(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }
    render() {
        return (
            <div>
                <h3>The sum is {this.props.sum}</h3>
                <input ref={c=>this.nameNode=c} type="text" placeholder="name" />
                <input ref={c=>this.ageNode=c} type="text" placeholder="age" />
                <button onClick={this.addPerson}>addPerson</button>
                <ul>
                    {
                        this.props.persons.map((p)=>{
                            return (<li key={p.id}>{p.name}++{p.age}</li>)

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>({persons:state.people,sum:state.sum}),//映射状态
    {
        addPeople:createAddPersonAction//映射状态方法

    }
)(Person)