import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const handleKembali = () => {
        navigate(-1)
    }

  return (
    <div className="font-poppins min-h-screen flex justify-center items-center">
      <div className="shadow p-4 grid gap-3 rounded-xl">
        <h2 className="text-center font-bold">Sign In</h2>
        <hr />
        <div>
          <p>Username:</p>
          <Input type="text" name="username" />
        </div>
        <div>
          <p>Password</p>
          <Input type="password" name="password" />
        </div>
        <hr />
        <button className="btn-base">Login</button>
        <button onClick={handleKembali} className="text-xs text-slate-600 underline text-left">Back to page</button>
      </div>
    </div>
  );
};

export default Login;
