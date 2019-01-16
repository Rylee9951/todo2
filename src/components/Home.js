import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import Filters from './Filters'
import '../styles/todoitem.css'

class Home extends Component {
  
  render() { 
    return ( 
      <div id='container'>
        <h1>Todos</h1>
        <TodoForm />
        <TodoList />
        <Filters />
      </div>
     )
  }
}
 
export default Home