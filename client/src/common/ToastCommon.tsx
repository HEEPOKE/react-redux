import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function ToastCommon() {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-dark position-relative"
      style={{ minHeight: "240px" }}
    >
      <ToastContainer className="p-3" position="top-end">
        <Toast>
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
