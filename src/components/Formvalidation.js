import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const Formvalidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("---data---", data);
  };

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group py-2">
          <input
            className={classNames("form-control ", {
              "is-invalid": errors.name,
            })}
            placeholder="Enter Name"
            type="text"
            {...register("name", {
              required: "  This field is required",
              minLength: {
                value: 4,
                message: "Please Enter 4 Digit Number",
              },
            })}
          />
          {errors.name && (
            <span className=" form-text  text-danger float-start mb-1">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="form-group py-2">
          <input
            className={classNames("form-control ", {
              "is-invalid": errors.number,
            })}
            type="number"
            placeholder="Enter Phone Number"
            name="phonenumber"
            {...register("number", {
              required: "This Field is Required",
              pattern: {
                value: /^\d{11}$/,
                message: "Please enter 11 digit Number",
              },
            })}
          />
          {errors.number && (
            <span className=" form-text  text-danger float-start mb-1">
              {errors.number.message}
            </span>
          )}
        </div>
        <div className="form-group py-2">
          <input
            className={classNames("form-control", {
              "is-invalid": errors.email,
            })}
            placeholder="Enter Email"
            type="email"
            name="email"
            {...register("email", {
              required: "This Field is Required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please Enter Correct Email (example@gmail.com)",
              },
            })}
          />
          {errors.email && (
            <span className="form-text text-danger float-start mb-1">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="form-group py-2">
          <input
            className={classNames("form-control", {
              "is-invalid": errors.password,
            })}
            type="password"
            placeholder="Enter Password"
            name="password"
            {...register("password", {
              required: "This Field is Required",
              pattern: {
                value:
                  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                message:
                  "Password must be (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)",
              },
            })}
          />
          {errors.password && (
            <span className="form-text text-danger float-start mb-1">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="form-group ">
          <button type="submit" className="btn btn-block btn-dark mt-3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formvalidation;
