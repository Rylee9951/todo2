const initialState = {
	todos: [],
	filter: 'all'
}

export default function(state = initialState, action){
	switch(action.type) {
		case 'ADD_TODO' :
			return  {...state, todos:[action.payload,...state.todos]}
		case 'TOGGLE_TODO':
			return {...state, todos: state.todos.map(todo => {
				if(todo.id  === action.id){
					todo.active = !todo.active
				}
				return todo
			})}
		case 'DELETE_TODO':
			return {...state, todos: state.todos.filter(todo => todo.id !== action.id)}
		case 'FILTER_TODOS': 
			return {...state, filter: action.filter}
		case 'CLEAR_COMPLETED':
			return {...state, todos: state.todos.filter(todo => todo.active )}
		default:
			return state
	}
}
