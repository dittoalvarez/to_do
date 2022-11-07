import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (list) {
      setList([...list, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(list);
  return (
    <div className="App">
      <span className="heading"> To Do Do DO</span>
      <InputField todo={todo} setTodo={setTodo} addItem={addItem} />
      <TodoList list={list} setList={setList} />
      {list.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
