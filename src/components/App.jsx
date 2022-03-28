import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    //console.log(id);
    setItems((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    });
  }
  function editItem(id) {
    for(let i=0; i<items.length; i++) {
      if(i === id) {
        setInputText(items[i]);
        break;
      }
    }
    
    deleteItem(id);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol>
          {items.map((todoItem, index) => (
            <Todo 
            key = {index}
            id = {index}
            text={todoItem}
              onChecked={deleteItem}
              editChecked={editItem}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
