import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { useAddUserMutation } from "../../features/user/userSlice";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [addUser, { isLoading, isError }] = useAddUserMutation();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        if (user?.email) {
          addUser({
            name,
            email,
            password,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <p>Loading to add user...</p>;
  }
  if (isError) {
    return <p>Opps, there was an error</p>;
  }
  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignup} className="fieldset">
            <label className="fieldset-label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
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

            <button type="submit" className="btn btn-neutral mt-4">
              Sign up
            </button>
          </form>
          <h1 className="text-center text-red-400">
            Already have any account? <Link to="/login">Login</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
