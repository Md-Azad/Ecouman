import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const axios = useAxiosPublic();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        const user = res?.data?.user;
        axios
          .post("/users/jwt", user)
          .then((res) => {
            localStorage.setItem("token", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="fieldset-label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <h1 className="text-center text-red-400">
            Do not have any account? <Link to="/signup">Sign Up</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
