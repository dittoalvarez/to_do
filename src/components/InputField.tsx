import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addItem: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, addItem }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        className="input"
        onSubmit={(e) => {
          addItem(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter a task"
          className="input_box"
        ></input>
        <button className="submit_button" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
