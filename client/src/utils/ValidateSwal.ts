import Swal from "sweetalert2";

const ErrorMessage = (message: string) => {
  Swal.fire({
    icon: "error",
    text: message,
    showConfirmButton: false,
    showDenyButton: true,
    denyButtonText: "Close",
  });
};

const ValidateUtils = { ErrorMessage };

export default ValidateUtils;
