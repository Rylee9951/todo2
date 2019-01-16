import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends Component {
  
  
  
  render() { 
    return ( 
      <div>
       {this.props.todos.map(todo => (
         <TodoItem key={todo.id} {...todo}/>
       ))}
      </div>
     );
  }
}
function mapStateToProps(appState) {
 
  if(appState.filter === 'all'){
    return {
      todos: appState.todos
    }
  }
  if(appState.filter === 'active'){
      return{
        todos: appState.todos.filter(item => item.active)
      }
  }
  if(appState.filter === 'complete'){
    return {
    todos: appState.todos.filter(item => !item.active)
    }
  }
}
export default connect(mapStateToProps)(TodoList)