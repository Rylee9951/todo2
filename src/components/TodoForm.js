import React, { Component } from 'react'
import { addTodo }from '../actions/todoAction'
import '../styles/todoitem.css'

class TodoForm extends Component {
  state = { 
    todo: ''
   }
   handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    addTodo(this.state.todo)
    this.setState({
      todo: ''
    })
  }
  render() { 
    return ( 
      <div>
        <form autoComplete='off' onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.todo}  name='todo' placeholder='add todo...'/>
        </form>
      </div>
     )
  }
}
 
export default TodoForm