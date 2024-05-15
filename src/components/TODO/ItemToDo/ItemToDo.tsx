import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ItemToDo.css";
import {
  faBan,
  faCheck,
  faEye,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../ListToDo/ListToDo.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function ItemToDo({ props, onDelete, onModify }) {
  const { id, todo, complete } = props;
  const [completed, setCompleted] = useState(complete);

  const handleToggleComplete = () => {
    setCompleted(!completed);
  };
  const handleDelete = () => {
    onDelete(id);
  };
  const handleModify = () => {
    const modifiedTodo = prompt("Modify todo:", todo);
    if (modifiedTodo !== null) {
      onModify(modifiedTodo);
    }
  };
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${
            completed ? "completed" : ""
          }`}
        >
          <span>{props.todo}</span>
          <div>
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={completed ? faBan : faCheck}
              className="pointer"
              onClick={handleToggleComplete}
            />
            <Link to={`/details/${id}`}>
              <FontAwesomeIcon
                style={{ marginRight: "0.3em" }}
                icon={faEye}
                className="pointer"
              />
            </Link>

            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={handleModify}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              data-testid="delete-icon"
              onClick={handleDelete}
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default ItemToDo;
