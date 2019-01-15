import React, { Component } from 'react';
import { deleteTodo, changeStatus } from '../actions/todoAction'

import '../styles/todoitem.css'

class TodoItem extends Component {
 
  deleteTodo = (e) => {
    deleteTodo(this.props.id)
  }
  handleToggle = (e) => {
    changeStatus(this.props.id)
  }
  render() { 
    return ( 
      <div id='todocontainer' className={this.props.active ? '' : 'complete'} onClick={this.handleToggle}>
          {this.props.todo}
          <button className='delete' onClick={this.deleteTodo}>X</button>
      </div>
     );
  }
}
 
export default TodoItem;