import { Redirect, useHistory } from "react-router-dom";
import { users } from "./../data/DataUsers";
import { MainBody } from "./MainBody/MainBody";

export const SignIn = (props) => {
  const history = useHistory();
  function handleEmail(e) {
    props.setLogin(e.target.value);
  }

  function handlePassword(e) {
    props.setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (
        props.login === users[i].email &&
        props.password === users[i].password
      ) {
        alert("Welcome  " + users[i].email);
        props.setAuth(true);
        props.setUser(users[i]);
        history.push("/");
        return;
      }
    }
    if (props.isAuth === false) {
      alert("Email or Password incorrect!");
    }
  }
  return (
    <div className="container">
      <div className="offset-4 col-4 mt-5">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleEmail}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              onChange={handlePassword}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your password with anyone else.
            </small>
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-sm text-white"
            style={{ backgroundColor: "#016064" }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
