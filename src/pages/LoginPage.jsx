import { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickLogin = () => {
    console.log(username);
    console.log(password);
    console.log("on click");
  }
  return (
    <div className="login_page">
      <LoginForm 
      username={username}
      onChangeUsername={(event) => setUsername(event.target.value)}
      password={password}
      onChangePassword={(event) => setPassword(event.target.value)}
      onClickLogin={onClickLogin}
      />
    </div>
  );
};

export default LoginPage;
