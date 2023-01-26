import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import FormInputAuthCommon from "../../common/auth/FormInputAuth";

export default function LoginPage() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const Validation = (e: any) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    var data = {
      email: email,
      password: password,
    };

    //   AuthApiServices.loginApi(data);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3">
              <h4>Login</h4>
            </div>
            <Form noValidate validated={validated} onSubmit={Validation}>
              <FormInputAuthCommon
                label="Email"
                type="email"
                setValue={setEmail}
                placeholder="Enter Email"
                required={true}
              />
              <FormInputAuthCommon
                mb="mb-3"
                label="Password"
                type="password"
                minLength={8}
                setValue={setPassword}
                placeholder="Enter Password"
                required={true}
              />
              <Form.Group
                className="d-flex justify-content-between align-items-center"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Remember me" />
                <LinkContainer to="/auth/Forgot-password">
                  <a>Forgot password?</a>
                </LinkContainer>
              </Form.Group>
              <Button
                className="btn-lg mt-2 col-12"
                variant="primary"
                onClick={handleSubmit}
                type="submit"
              >
                Login
              </Button>
            </Form>
            <div className="text-center text-lg-start">
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account?{" "}
                <LinkContainer to="/auth/register">
                  <a className="link-danger NN">Register</a>
                </LinkContainer>
              </p>
            </div>
            <div className="text-center mt-2 fw-bold">
              <h4>OR</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
