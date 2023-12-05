import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    userDetailsList: initialTodosList,
  }

  onDeleteTodo = id => {
    const {userDetailsList} = this.state
    const filteredTodos = userDetailsList.filter(eachTodo => eachTodo.id !== id)
    this.setState({userDetailsList: filteredTodos})
  }

  render() {
    const {userDetailsList} = this.state
    return (
      <div className="todos-container">
        <div className="todos-card">
          <h1 className="card-heading">Simple Todos</h1>

          <ul>
            {userDetailsList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                onDeleteTodo={this.onDeleteTodo}
                key={eachTodo.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
