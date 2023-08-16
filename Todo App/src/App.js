import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ListView from './components/listView'
import AboutPage from "./components/AboutPage";

function App() {

  const [listTodo, setlistTodo] = useState([]);
  const [Mode, setMode] = useState('light'); // For Enabling or Disabling Dark Mode
  const [btntext, setbtnText] = useState('Dark Mode');

  /**
   * The function toggles between light and dark mode by changing the background color and button text.
   */
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#121212';
      setbtnText("Light Mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      setbtnText("Dark Mode");
    }
  }

  /**
   * The function adds an input text to a list of to-do items if the input text is not empty.
   * @param inputtext - The inputtext parameter is a string representing the text that the user wants
   * to add to a list of to-do items.
   */
  const addToList = (inputtext) => {
    if (inputtext !== "") {
      setlistTodo([...listTodo, inputtext]);
      console.log(listTodo)
    }
  };

  const addList = (inputtext) => {
    addToList(inputtext);
  }

  /**
   * This function deletes an item from a list of todos based on its index.
   * @param key - The key parameter in the DelItem function represents the index of the item that needs
   * to be deleted from the listTodo array. The splice method is used to remove the item at the
   * specified index from the newList array.
   */
  const DelItem = (key) => {
    let newList = [...listTodo];
    newList.splice(key, 1);
    setlistTodo([...newList]);
  }
  return (
    <>
      <Navbar mode={Mode} toggleMode={toggleMode} btnText={btntext} />
      <div className="container mt-4 col-6">
        <Routes>
          <Route exact path="/" element={<TodoInput AddToList={addList} />} />
          <Route path="about" element={<AboutPage mode={Mode} />} />
        </Routes>
        {listTodo.map((listItems, i) => {
          return (<ListView key={i} listitem={listItems} index={i} delItem={DelItem} mode={Mode} />)
        })}
      </div>
    </>
  );
}

export default App;
