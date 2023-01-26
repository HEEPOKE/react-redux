import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const RegisterSwal = (message: string) => {
  Swal.fire({
    icon: "success",
    text: message,
    showConfirmButton: true,
  }).then((res: any) => {
    if (res.isConfirmed) {
      navigate("/");
    }
  });
};

const AuthUtils = { RegisterSwal };

export default AuthUtils;
