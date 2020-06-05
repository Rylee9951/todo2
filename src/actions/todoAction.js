import store from '../store'
import shortId from 'shortid'

export function addTodo(todo){
	store.dispatch({
		type: 'ADD_TODO',
		payload:{
			id: shortId.generate(),
			todo: todo,
			active: true
		}
	})
}

export function filterTodos(filter){
	store.dispatch({
	type: 'FILTER_TODOS',
	filter: filter
	})
 }
 export function ClearCompleted(){
	store.dispatch({
		type: 'CLEAR_COMPLETED'
	})
 }
 
 export function deleteTodo(id){
	store.dispatch({
		type: 'DELETE_TODO',
		id: id
	})
 }