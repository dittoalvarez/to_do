import React from "react";
import "./styles.css";
import { Todo } from "./model";
import SingleList from "./singleList";

interface Props {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ list, setList }: Props) => {
  return (
    <div className="list">
      {list.map((list) => (
        <SingleList todo={todo} key={list.id} list={list} setList={setList} />
      ))}
    </div>
  );
};
export default TodoList;
