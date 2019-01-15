import React, { Component } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import Filters from './Filters'
import '../styles/todoitem.css'

class Home extends Component {
  
  render() { 
    return ( 
      <div id='container'>
        <TodoForm />
        <TodoList />
        <Filters />
      </div>
     )
  }
}
 
export default Home