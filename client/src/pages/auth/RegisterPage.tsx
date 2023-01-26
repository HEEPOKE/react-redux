import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import FormInputAuthCommon from "../../common/auth/FormInputAuth";
import { RegisterContext } from "../../contexts/auth/RegisterContext";

export default function RegisterPage() {
  const {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    handlerSubmit,
  } = useContext(RegisterContext);

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100 mt-3">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3">
              <h4>Register</h4>
            </div>
            <Form>
              <FormInputAuthCommon
                mb="mb-3"
                label="FirstName"
                type="text"
                setValue={setFirstName}
                placeholder="Enter firstName"
                required={true}
              />
              <FormInputAuthCommon
                mb="mb-3"
                label="LastName"
                type="text"
                setValue={setLastName}
                placeholder="Enter lastName"
                required={true}
              />
              <FormInputAuthCommon
                mb="mb-3"
                label="Email"
                type="text"
                setValue={setEmail}
                placeholder="Enter email"
                required={true}
              />
              <FormInputAuthCommon
                mb="mb-3"
                label="password"
                type="password"
                minLength={8}
                maxLength={20}
                setValue={setPassword}
                placeholder="Enter password"
                required={true}
              />
              <FormInputAuthCommon
                mb="mb-3"
                label="Confirm Password"
                type="password"
                minLength={8}
                maxLength={20}
                setValue={setConfirmPassword}
                placeholder="Enter confirmPassword"
                required={true}
              />
              <Button
                className="btn-lg mt-2 mb-5 col-12"
                variant="primary"
                onClick={handlerSubmit}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
