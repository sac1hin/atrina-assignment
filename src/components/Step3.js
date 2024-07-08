import React from "react";
import { useForm } from "react-hook-form";

const Step3 = ({ prevStep, setFormData, formData, submitForm }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Address:</label>
        <input {...register("address")} />
      </div>
      <button type="button" onClick={prevStep}>
        Previous
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step3;
