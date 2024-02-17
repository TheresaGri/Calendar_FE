import "./LoginForm.css";

const LoginForm = ({
  username,
  onChangeUsername,
  password,
  onChangePassword,
  onClickLogin,
}) => {
  return (
    <div className="login_form">
      <label>
        Username:
        <input value={username} onChange={onChangeUsername} />
      </label>
      <label>
        Password:
        <input value={password} onChange={onChangePassword} />
      </label>
      <button onClick={onClickLogin}>login</button>
    </div>
  );
};

export default LoginForm;
