# MobX + Styled Component Todo App

MobX 상태관리를 이해하기 위해 실습한 간단한 Todo 리스트 앱입니다.

### 기술 스택 및 라이브러리

| 항목      | 설명                         |
| --------- | ---------------------------- |
| Framework | Vite + React 19 + TypeScript |
| 상태관리  | MobX, mobx-react-lite        |
| 스타일링  | styled-components            |
| 번들러    | Vite                         |

---

## MobX 개념 정리

#### 1. MobX 설치방법

```bash
yarn add mobx mobx-react-lite
```

 </br>

#### 2. MobX 핵심 기능

| 항목               | 설명                                                   |
| ------------------ | ------------------------------------------------------ |
| makeAutoObservable | 상태, 메서드, 계산값까지 자동으로 MobX 반응형 처리     |
| observer()         | 컴포넌트를 감싸서 observable 상태 변화에 반응하도록 함 |
| computed           | get 키워드를 사용하여 자동 캐싱되는 파생 상태 구현     |

 </br>

#### 3. 반응형 시스템(Reactivity)의 작동 원리

MobX는 “관찰 가능한 상태(Observable State)“가 변경될 때 이를 사용하는 “리액션(Reaction)“이 자동으로 실행되도록 하는 Observer 패턴 기반의 반응형 라이브러리입니다.

- 상태는 observable로 만들고,
- 파생값이나 UI는 이를 자동 감지하여 반응합니다.
- observer로 감싼 컴포넌트는 관련된 상태가 변경될 때 자동으로 리렌더링됩니다.

 </br>

#### 4. 액션(Action)의 역할

- MobX에서는 상태를 변경하는 로직을 "액션"이라 부르며, `@action` 데코레이터 또는 `makeAutoObservable()`로 자동 인식됩니다.
- 복잡한 상태 변경 로직도 하나의 함수로 묶어 예측 가능한 흐름을 유지할 수 있습니다.

(실습 예제에서는 makeAutoObservable을 쓰기 때문에 별도 @action 선언은 생략 가능!)

 </br>

#### 5. computed와 autorun, reaction의 차이점

| 기능     | 용도                                                 |
| -------- | ---------------------------------------------------- |
| computed | 파생 상태 값을 캐싱해서 효율적으로 계산              |
| autorun  | 상태가 바뀔 때마다 함수 실행 (처음부터 실행 됨)      |
| reaction | 특정 observable 이 바뀔 때만! 실행 (조건적으로 실행) |

```tsx
autorun(() => {
  console.log("todos changed:", todoStore.todos.length);
});
```

### MobX의 장점

    • 자동 반응성: setState 없이도 UI가 자동으로 갱신됨
    • 간결한 코드: Redux 대비 코드 양이 적고 직관적
    • 파생값 관리 용이: computed(get)을 통해 쉽게 관리 가능

---

### 실습코드 요약

#### 1. makeAutoObservable()

• MobX에서 클래스 기반 상태를 자동으로 관찰 가능하게 만든다.

• 상태, 액션, 파생값을 모두 자동 처리한다.

```tsx
constructor() {
makeAutoObservable(this);
}
```

</br>

#### 2. observable vs observer

| 항목       | 용도                                                    |
| ---------- | ------------------------------------------------------- |
| observable | 상태를 관찰 가능하게 만드는 도구 (store 내부에서 사용)  |
| observer   | 컴포넌트를 반응형으로 만드는 도구 (React 외부에서 감쌈) |

```tsx
const TodoList = observer(() => { ... });
```

</br>

#### 3. 상태 클래스 구성

```tsx
export class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title: string) { ... }
  toggleTodo(id: number) { ... }
  removeTodo(id: number) { ... }

  get completedCount() { ... }
  get totalCount() { ... }
}
```

---

### 참고문헌

- [공식문서](https://mobx.js.org/getting-started)
- [MobX core](https://mobx.js.org/observable-state.html)
- [참고블로그](https://velog.io/@bluecoolgod80/Mobx-%EC%82%AC%EC%9A%A9%EB%B2%95)
