import { useNavigate } from "react-router-dom";
import "./login-page.css";
import { useState } from "react";
const LoginPage = () => {
  // const navigate= useNavigate();

  const [loggedInUsers, setLoggedInUsers] = useState(
    JSON.parse(localStorage.getItem("loggedInUsers")) || []
  );

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("users"));
    console.log(userData);
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
    console.log(password);
    const userLogin = userData.filter((el, k) => {
      return el.email === email && el.password === password;
    });
    console.log("user login", userLogin);
    if (userLogin.length === 0) alert("Invalid Email or Password");
    else {
      // alert ("welcome "+ userLogin[0].name);
      const userName = userLogin[0].name;
      setLoggedInUsers(userName);
      localStorage.setItem("loggedInUsers", JSON.stringify(userLogin[0].name));
      navigate("/home");
    }
  };
  // useEffect(() => {
  //   localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));
  // }, [loggedInUsers]);
  return (
    <div className="login-page">
      <form className=' class="login' onSubmit={handleLogin}>
        <h1>Login</h1>
        <div class="login__field"></div>
        <input
          className="login__input"
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="login__input"
          label="Password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <div className="login__submit">
          <button
            className="button__text"
            type="submit"
            // onClick={()=> navigate('/home')}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
