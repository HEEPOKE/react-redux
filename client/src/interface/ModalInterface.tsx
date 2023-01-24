import { Dispatch, SetStateAction } from "react";

export default interface ModalInterface {
  title: string;
  content?: JSX.Element;
  show?: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
