import "./styles.css";
import { store } from "./store/store";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import { addTodo, deleteTodo, toggleTodo } from "./store/actions";

export default function App() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");
  const [, set] = useState(0);

  const todos = store.getState();
  useEffect(() => {
    setData(todos.todo);
  }, []);

  const handleDelete = (id) => {
    const payload = {
      id: id
    };
    store.dispatch(deleteTodo(payload));
    setData(store.getState().todo);
    set(Math.random);
  };
  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title: todo,
      status: false
    };
    store.dispatch(addTodo(payload));
    setData(store.getState().todo);
    set(Math.random);
  };

  const handleToggleTodo = (id) => {
    const payload = {
      id: id
    };
    store.dispatch(toggleTodo(payload));
    setData(store.getState().todo);
    set(Math.random);
  };

  //console.log("app", store.getState().todo);
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Enter title"
          style={{ padding: "10px", borderRadius: "7px" }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={handleAdd}
          style={{
            marginLeft: "5px",
            padding: "7px",
            color: "#fff",
            backgroundColor: "#333"
          }}
        >
          Add todo
        </button>
      </div>
      <div
        style={{
          border: "2px solid tomato",
          marginTop: "20px",
          padding: "10px"
        }}
      >
        <h2 style={{ color: "#fff", backgroundColor: "#333" }}>Todos</h2>
        {data &&
          data.map((ele) => {
            return (
              <div>
                <h3
                  style={ele.status ? { textDecoration: "line-through" } : {}}
                >
                  {ele.title}
                </h3>
                <button onClick={() => handleDelete(ele.id)}>Delete</button>
                <button onClick={() => handleToggleTodo(ele.id)}>Toggle</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
