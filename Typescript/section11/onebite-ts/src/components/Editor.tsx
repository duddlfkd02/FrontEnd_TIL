import { useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

function Editor(props: Props) {
  const [text, setText] = useState("");

  const onChageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChageInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}

export default Editor;
