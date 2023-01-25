import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function RegisterPage() {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tel, setTel] = useState("");

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
      username: username,
      password: password,
      email: email,
      tel: tel,
      role: 1,
    };

    // if (confirmPassword != password) {
    //   ValidateSwal.confirmPasswordSwal();
    // } else {
    //   AuthApiServices.registerApi(data);
    // }
  };

  const Back = () => {
    window.history.back();
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
              <h4>Register</h4>
            </div>
            <Form noValidate validated={validated} onSubmit={Validation}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e: any) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Username
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  onChange={(e: any) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e: any) => setPassword(e.target.value)}
                  minLength={8}
                  maxLength={20}
                  placeholder="Enter Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Password
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                  minLength={8}
                  maxLength={20}
                  placeholder="Confirm Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter ConfirmPassword
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tel</Form.Label>
                <Form.Control
                  type="tel"
                  onChange={(e: any) => setTel(e.target.value)}
                  minLength={10}
                  maxLength={10}
                  placeholder="xxx-xxx-xxxx"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Tel
                </Form.Control.Feedback>
              </Form.Group>
              {/* <TelForm /> */}
              <Button
                type="submit"
                className="btn-lg mt-2 col-12"
                variant="primary"
                onClick={handleSubmit}
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