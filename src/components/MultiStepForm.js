import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    setShow(true);
    console.log("Form submitted successfully", formData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case 3:
        return (
          <Step3
            prevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
            submitForm={submitForm}
          />
        );
      default:
        return (
          <Step1
            nextStep={nextStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
    }
  };

  return (
    <div>
      <div className="page-tracker">
        <p>Step {step} of 3</p>
      </div>
      {renderStep()}
      {
        show &&
        <h1>{`${formData.name} ${formData.email} ${formData.address}`}</h1>
      }
    </div>
  );
};

export default MultiStepForm;
