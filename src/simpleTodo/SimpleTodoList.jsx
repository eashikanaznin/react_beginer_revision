export default function SimpleTodoList({ item, id, deleteSpecificTodo }) {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input type="checkbox" data-list-item-checkbox />
        <span data-list-item-text>
          {item}:::ID::
          {id}
        </span>
      </label>
      <button data-button-delete onClick={() => deleteSpecificTodo(id)}>
        Delete
      </button>
    </li>
  );
}
