import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";
import "./Success.css";
const Success = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const { user } = useAuth();
  return (
    <div className="contener">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="input-filed"
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <p className="p-tag">This field is required</p>}
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="input-filed"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <p className="p-tag">This field is required</p>
        )}
        <br />
        <input className="btn-login" type="submit" />
      </form>
    </div>
  );
};

export default Success;
