# 🧪 React 19 미니 프로젝트: Optimistic Talk

## 프로젝트 개요

이 프로젝트는 React 19의 새로운 기능을 직접 적용해보기 위한 실습용 미니 프로젝트입니다.  
간단한 댓글 작성 기능을 구현하면서 `useOptimistic`, `useFormStatus`, `startTransition` 등을 활용해  
React 18 방식과의 차이점을 비교하고 체감하고자 하였습니다.

### 예시 화면

![Image](https://github.com/user-attachments/assets/c5988b99-1808-4c96-a139-c96f141430e5)

---

## 폴더 구조

```
src/
  └ components/
      └ OptimisticTalk/
          ├── CommentForm.tsx   # 입력 및 전송 처리 (낙관적 UI 포함)
          └── CommentList.tsx   # 댓글 리스트 렌더링
  └ App.tsx                     # 상태 관리 및 컴포넌트 연결
```

---

## 사용한 React 19 기능

### 1. `useOptimistic`

- 서버 응답을 기다리지 않고 먼저 UI에 반영하기 위한 훅
- `App.tsx`에서 선언 → `CommentForm`에서 `onOptimisticAdd()`를 호출하여 리스트에 즉시 추가

```ts
const [optimisticComments, addOptimisticComment] = useOptimistic(
  comments,
  (state, newComment) => [...state, newComment]
);
```

---

### 2. `useFormStatus`

- 현재 `<form>`의 제출 상태(`pending`)를 추적할 수 있는 훅
- 등록 버튼 비활성화 및 `"등록 중..."` 텍스트 처리에 사용됨

```tsx
const { pending } = useFormStatus();

return <button disabled={pending}>{pending ? "등록 중..." : "등록"}</button>;
```

---

### 3. `startTransition`

- 낙관적 UI나 리렌더링을 낮은 우선순위로 처리할 때 사용
- `addOptimisticComment()`를 감쌀 때 사용되어 UI 응답성 유지

```tsx
startTransition(() => {
  onOptimisticAdd(comment);
});
```

---

### 4. `form action` 기반 제출

- React 19에서는 `onSubmit` 없이도 `action={submitFunction}`으로 제출 가능
- `FormData`를 인자로 받는 async 함수로 처리

```tsx
<form action={submitAction}>
  ...
</form>

async function submitAction(formData: FormData) {
  const comment = formData.get("comment");
  ...
}
```

---

## React 18 vs 19 차이점 비교

| 항목          | React 18 방식                         | React 19 방식                                  |
| ------------- | ------------------------------------- | ---------------------------------------------- |
| 상태 관리     | `useState`, `isLoading` 수동 처리     | `useFormStatus`, `useOptimistic` 등 선언적 API |
| 폼 제출       | `onSubmit`, `e.preventDefault()` 필요 | `form action={...}` 구조로 대체                |
| 낙관적 렌더링 | 직접 상태 수동 변경 필요              | `useOptimistic()`으로 상태 추정                |
| 버튼 비활성화 | 상태 추적 수동 구현                   | `pending` 자동 추적 가능                       |
| 응답성 제어   | 전부 동기 처리                        | `startTransition()`으로 부드럽게               |

---

## 실행 흐름 요약

1. 사용자가 댓글 입력
2. `submitAction(formData)` 실행 → `onOptimisticAdd()`로 즉시 리스트 반영
3. 2초 후 `onAddComment()`로 진짜 상태 반영
4. 버튼은 `useFormStatus()`로 로딩 상태 표시
