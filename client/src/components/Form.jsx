import {
  errStyle,
  btnStyle,
  inputStyle,
  lableStyle,
  formContainerStyle,
  headingStyle,
} from "../constants/Style";
import { useForm } from "react-hook-form";

const Form = ({ setEmployees }) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = "http://localhost:3000/api/newEmp";
    fetch(url, {
      method: "post",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (response.ok) {
        reset();
        // Update the list of employees after a successful submission
        fetch("http://localhost:3000/api/getEmp")
          .then((response) => response.json())
          .then((data) => setEmployees(data))
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className={formContainerStyle}>
      <h2 className={headingStyle}>Employee Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className={lableStyle}>Employee Name:</label>
          <input
            className={inputStyle}
            {...register("employeeName", { required: true, maxLength: 30 })}
          />
          {errors.employeeName && (
            <span className={errStyle}>
              Employee name is required (max length: 30 characters)
            </span>
          )}
        </div>

        <div>
          <label className={lableStyle}>Employee ID:</label>
          <input
            className={inputStyle}
            {...register("employeeId", { required: true })}
          />
          {errors.employeeId && (
            <span className={errStyle}>Employee ID is required</span>
          )}
        </div>

        <div>
          <label className={lableStyle}>Department:</label>
          <select {...register("department", { required: true })}>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
          </select>
          {errors.department && (
            <span className={errStyle}>Department is required</span>
          )}
        </div>

        <div>
          <label className={lableStyle}>Date of Birth:</label>
          <input
            className={inputStyle}
            type="date"
            {...register("dob", { required: true })}
          />
          {errors.dob && (
            <span className={errStyle}>Date of Birth is required</span>
          )}
        </div>

        <div>
          <label className={lableStyle}>Gender:</label>
          <label className="m-4">
            <input
              type="radio"
              {...register("gender", { required: true })}
              value="male"
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              {...register("gender", { required: true })}
              value="female"
            />{" "}
            Female
          </label>
          {errors.gender && (
            <span className={errStyle}>Gender is required</span>
          )}
        </div>

        <div>
          <label className={lableStyle}>Designation:</label>
          <input
            className={inputStyle}
            {...register("designation", { required: true })}
          />
          {errors.designation && (
            <span className={errStyle}>Designation is required</span>
          )}
        </div>

        <div>
          <label className={lableStyle}>Salary:</label>
          <input
            className={inputStyle}
            type="number"
            {...register("salary", { required: true, maxLength: 8 })}
          />
          {errors.salary && (
            <span className={errStyle}>
              Salary is required (max length: 8 digits)
            </span>
          )}
        </div>
        <button className={btnStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
