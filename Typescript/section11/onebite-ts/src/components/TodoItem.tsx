import { Todo } from "../types";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번: {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}

export default TodoItem;
