import type { Todo } from "../types/Todo";
import { makeAutoObservable } from "mobx";

export class TodoStore {
  todos: Todo[] = []; // 1. observable 상태로 관리할 todo 리스트

  constructor() {
    // 2. 상태/액션/계산값 자동으로 observable 처리
    makeAutoObservable(this);
  }

  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  // 3. 파생값 : 완료된 todo 개수
  get completedCount() {
    return this.todos.filter((t) => t.completed).length;
  }

  // 4. 전체 Todo 개수
  get totalCount() {
    return this.todos.length;
  }
}

// 전역에서 사용할 수 있게 내보내기
const todoStore = new TodoStore();
export default todoStore;
