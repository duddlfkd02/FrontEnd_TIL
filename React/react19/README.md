# React 19 정리

## 1. `useTransition`

### 기능 설명

- 사용자 입력(고우선)과 무거운 작업(저우선)을 분리해 UI 응답성을 높이는 훅
- 긴 렌더링 작업을 `startTransition()`으로 감싸 비동기처럼 처리

### React 18과 차이점

- React 18부터 도입된 기능이지만, React 19에서 내부 최적화가 이루어짐

### 사용 예시

```tsx
startTransition(() => {
  setHeavyList(data);
});
```

### ⚠️ 주의사항

- 무조건 감싼다고 성능이 개선되지는 않음 → 타이핑 등 UX 민감한 곳에서 사용

---

## 2. `Suspense` + `lazy`

### 기능 설명

- 컴포넌트 지연 로딩 처리 시 fallback UI 제공
- `lazy()`로 컴포넌트를 동적으로 불러올 수 있음

### React 18과 차이점

- React 18에서도 사용 가능
- React 19에서는 `use()`와 함께 더 유기적으로 작동

### 사용 예시

```tsx
const HeavyComponent = lazy(() => import("./HeavyComponent"));

<Suspense fallback={<p>로딩 중...</p>}>
  <HeavyComponent />
</Suspense>;
```

---

## 3. `use()` 훅

### 기능 설명

- 서버/클라이언트에서 비동기 데이터를 직접 컴포넌트 안에서 동기처럼 사용 가능
- `await` 대신 React가 Suspense로 제어

### React 18과 차이점

- React 18에서는 존재하지 않음
- React 19에서 새롭게 도입된 기능

### 사용 예시

```tsx
const user = use(fetchUserData());
```

### ⚠️ 주의사항

- 현재는 **서버 컴포넌트** 환경(예: Next.js)에서만 정식 지원

---

## 4. `form action` + `useFormStatus()`

### 기능 설명

- `<form>` 태그에 `action={함수}`를 넘겨 submit 처리
- `useFormStatus()`로 현재 제출 상태(pending 여부)를 확인 가능

### React 18과 차이점

- 기존에는 `onSubmit` + `preventDefault()` + 수동 상태 관리 필요
- React 19에서는 서버 액션과 연결되어 처리 가능

### 사용 예시

```tsx
<form action={handleSubmit}>
  <SubmitButton />
</form>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button>{pending ? "제출 중" : "제출"}</button>;
}
```

---

## 5. `useOptimistic`

### 기능 설명

- 서버 응답을 기다리지 않고 UI에 먼저 반영 → 사용자 경험 향상
- `useOptimistic()`으로 상태 추정값을 임시로 그려줄 수 있음

### React 18과 차이점

- React 18에는 존재하지 않던 React 19 전용 기능

### 사용 예시

```tsx
const [optimisticItems, addOptimisticItem] = useOptimistic(
  items,
  (state, value) => [...state, value]
);

startTransition(() => {
  addOptimisticItem(newItem);
});
```

### ⚠️ 주의사항

- 반드시 `startTransition()` 또는 `server action` 내에서 사용해야 오류 방지됨
