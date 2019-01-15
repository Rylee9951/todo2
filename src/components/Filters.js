import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import {filterTodos, ClearCompleted} from '../actions/todoAction'
import '../styles/todoitem.css'

class Filters extends Component {
  all = (e) => {
		filterTodos('all')
	}
	
	active = (e) => {
		filterTodos('active')
	}

	completed = (e) => {
		filterTodos('complete')
	}
	clearCompleted = (e) => {
		ClearCompleted()
	}
 	render() {
   	return (
			 <div className="filter">
			 	<p>{this.props.count} items left</p>
	 			<button onClick={this.all}>All</button>
	 			<button onClick={this.active}>Active</button>
				<button onClick={this.completed}>Complete</button>
				<button onClick={this.clearCompleted}>Clear Completed</button>
	 		</div>
   	)
 	}

}
function mapStateToProps(appState) {
	return{
	count: appState.todos.filter(item => item.active).length
	}
}
export default connect(mapStateToProps)(Filters)
