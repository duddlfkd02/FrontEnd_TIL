import { use } from "react";
import { fetchUser } from "../utils/fetchUser";

const userPromise = fetchUser();

const UserInfo = () => {
  const user = use(userPromise);
  return (
    <div>
      <h2>사용자 정보</h2>
      <p>이름 : {user.name}</p>
      <p>이메일: {user.email}</p>
    </div>
  );
};

export default UserInfo;
