import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";
import { useHistory, useLocation } from "react-router";
import "./Login.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const { handlerGoogleSingin } = useAuth();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const GoogleSingIn = () => {
    handlerGoogleSingin().then((result) => {
      history.replace(from);
    });
  };

  return (
    <div>
      <div className="contener">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            {...register("email", { required: true })}
            className="input-filed"
            placeholder="Enter your Email"
          />
          {errors.exampleRequired && (
            <span className="error-text">This field is required</span>
          )}
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            {...register("password", { required: true })}
            className="input-filed "
            placeholder="Enter your password"
          />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && (
            <span className="error-text">This field is required</span>
          )}
          <br />

          <input className="btn-login" type="submit" />
          <h5>
            .......................................................................................
          </h5>
        </form>
      </div>

      <div className="contener">
        <button className="btn-login" onClick={GoogleSingIn}>
          SingIn with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
