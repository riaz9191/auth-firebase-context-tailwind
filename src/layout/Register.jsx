import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  console.log(user,createUser);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email,password)
    .then(res=>{
      const loggedUser = res.user;
      console.log(loggedUser)
      form.reset();
    })
    .catch(err=>{
      console.log(err)
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Hey {user && <span>{user.displayName}</span>}, Register Now
            </h1>
          </div>
          <div
            className="card flex-shrink-0 w-100% max-w-md shadow-2xl bg-base-100"
            style={{ width: "350px" }}
          >
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link to="/login">
              <button className="btn  btn-link">Already Have Acc?</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
