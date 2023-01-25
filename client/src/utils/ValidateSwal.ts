import Swal from "sweetalert2";

const ErrorMessage = (message: string) => {
  Swal.fire({
    icon: "error",
    title: "กรอกข้อมูลผิดพลาด",
    text: message,
    showConfirmButton: false,
    showDenyButton: true,
    showCancelButton: true,
    denyButtonText: "Close",
  });
};

const ValidateUtils = { ErrorMessage };

export default ValidateUtils;
