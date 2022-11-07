import React from "react";
import model from './model'

type Props = {
  todo: Todo;
  list: List[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleList = ({ todo, list, setList }: Props) => {
  return <form></form>;
};

export default SingleList;
