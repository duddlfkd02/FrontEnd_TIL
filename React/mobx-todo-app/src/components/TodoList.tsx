import { useState } from "react";
import styled from "styled-components";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react-lite";

const TodoList = observer(() => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      todoStore.addTodo(input.trim());
      setInput("");
    }
  };

  return (
    <div>
      <Container>
        <Title>Todo List</Title>

        <Input
          placeholder="할 일 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <AddButton onClick={handleAddTodo}>추가</AddButton>

        <List>
          {todoStore.todos.map((todo) => (
            <ListItem key={todo.id}>
              <CheckBox
                type="checkbox"
                checked={todo.completed}
                onChange={() => todoStore.toggleTodo(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
              <DeleteButton onClick={() => todoStore.removeTodo(todo.id)}>
                삭제
              </DeleteButton>
            </ListItem>
          ))}
        </List>
        <Count>
          완료 : {todoStore.completedCount} / 전체 :{todoStore.totalCount}
        </Count>
      </Container>
    </div>
  );
});

export default TodoList;

const Container = styled.div`
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: blod;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  margin-right: 8px;
`;

const AddButton = styled.button`
  background: #4f46e5;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`;

const List = styled.ul`
  margin-top: 16px;
  -webkit-padding-start: 0px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  gap: 8px;
`;

const DeleteButton = styled.button`
  background: #e54646;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: 3px solid #707070;
`;

const Count = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: gray;
`;
