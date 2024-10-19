import { useTodoDispatch } from "../App";
import { Todo } from "../types";

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButtn = () => {
    dispatch.onClickDelete(props.id);
  };

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButtn}>삭제</button>
    </div>
  );
}
