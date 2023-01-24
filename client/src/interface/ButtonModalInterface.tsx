import { Dispatch, SetStateAction } from "react";

export default interface ButtonModalInterface {
  variant: string;
  name: string;
  show?: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
