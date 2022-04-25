import * as React from "react";
import Input from "../../../../app/components/Input/Input";

interface Props {}

const Todo: React.FunctionComponent<Props> = (props) => {
  const [todo, setTodo] = React.useState("");

  return (
    <div>
      <Input value={todo} onChange={(event) => setTodo(event.target.value)} />
    </div>
  );
};

export default Todo;
