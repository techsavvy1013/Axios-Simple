import { TextareaAutosize } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

// Fake api here: https://jsonplaceholder.typicode.com/
// TODO:
//   - Use the test api above
//   - Get the lastest posts
//   - When you click on a post it makes a
//   pop up and fetch the user id info from the api above
//   - Please use axios (installed) to make the requests

export default function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = React.useState([]);
  const [todoItem, setTodoItem] = React.useState(null);
  const [isListView, setIsListView] = React.useState(true);

  useEffect(() => {
    axios.get(apiUrl).then((todos) => setTodos(todos.data));
  }, []);
  // useEffect(() => console.log(todos), [todos]);
  // useEffect(() => console.log(todoItem), [todoItem]);

  const viewDetailView = (id) => {
    setIsListView(false);
    console.log(apiUrl + "/" + id.toString());
    axios.get(apiUrl + "/" + id.toString()).then((item) => {
      setTodoItem(item.data);
    });
  };

  return (
    <div className="App">
      {isListView === true ? (
        todos.map((item) => (
          <div onClick={() => viewDetailView(item.id)}> {item.title} </div>
        ))
      ) : (
        <div className="DetailView">
          Item Detail viewDetailView
          <br />
          Id : {todoItem == null ? "null" : todoItem.id}
          <br />
          Title : {todoItem == null ? "null" : todoItem.title}
          <br />
          <br />
          <br />
          <br />
          <button onClick={() => setIsListView(true)}>
            Go Back To List View
          </button>
        </div>
      )}
    </div>
  );
}
