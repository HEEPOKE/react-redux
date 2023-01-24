import { Dispatch, SetStateAction } from "react";

export default interface ButtonModalInterface {
  variant: string;
  name: string;
  setShow: Dispatch<SetStateAction<boolean>>;
}
