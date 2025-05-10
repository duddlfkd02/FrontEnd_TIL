import { useFormStatus } from "react-dom";

const handleSubmit = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("제출 값", formData.get("username"));
};

const FormComponent = () => {
  // 현재 폼 제출 중인지 확인하려면 useFormStatus() 사용
  const SubmitBtn = () => {
    const { pending } = useFormStatus(); // 제출상태 확인
    return <button> {pending ? "제출 중..." : "제출하기"}</button>;
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="username" required />
        <SubmitBtn />
      </form>
    </div>
  );
};

export default FormComponent;

// onSubmit이나 상태값 없이도 <form action={함수}> 형태로 폼을 제출하고 useFormStatus()로 제출 상태를 확인할 수 있음
// onSubmit, e.preventDefault, 상태관리 전부 생략 가능

// ⚠️ 주의사항
// 1. <form action={함수}> 구조는 React 19 이상에서만 동작
// 2. 비동기(async) 함수여야 정상 작동
// 3. useFormStatus()는 반드시 form 내부에서만 사용해야 정상 동작
