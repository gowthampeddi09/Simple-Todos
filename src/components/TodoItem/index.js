// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteTodo} = props
  const {title, id} = todoItem

  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="todo-item-container">
      <h1 className="todo-item">{title}</h1>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
