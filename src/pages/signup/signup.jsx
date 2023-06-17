import "./signup.css";
import { useState, useEffect } from "react";
import LoginPage from "../login/login-page";
// import {}
const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // const navigate = useNavigate();
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: Date.now(),
      name: event.target.name.value,
      phone: event.target.phone.value,
      password: event.target.password.value,
      email: event.target.email.value,
    };
    console.log(newUser);
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    window.location.href = "login";
    //  <LoginPage/>
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div className="signup">
      <div id="login-box">
        <div class="left">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Username"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={(event) => setPhone(event.target.value)}
              value={phone}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />

            <input type="submit" name="signup_submit" value="Sign up" />
          </form>
        </div>

        <div class="right">
          <span class="loginwith">
            Sign in with
            {/* <br />
            social network */}
          </span>

          <button class="social-signin facebook">Log in with facebook</button>
          <button class="social-signin twitter">Log in with Twitter</button>
          <button class="social-signin google">Log in with Google+</button>
        </div>
        <div class="or">OR</div>
      </div>
    </div>
  );
};

export default Signup;
