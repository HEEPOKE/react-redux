import Swal from "sweetalert2";

const LoginSwal = (message: string) => {
  Swal.fire({
    icon: "success",
    text: `${message}`,
    showConfirmButton: true,
  }).then((res: any) => {
    if (res.isConfirmed) {
      window.location.href = "/";
    }
  });
};

const AuthUtils = { LoginSwal };

export default AuthUtils;
