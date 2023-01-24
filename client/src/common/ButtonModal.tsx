import { Button } from "react-bootstrap";
import ButtonModalInterface from "../interface/ButtonModalInterface";

export default function ButtonModal({
  variant,
  name,
  setShow,
}: ButtonModalInterface) {
  const handleClick = () => {
    setShow(true);
  };

  return (
    <Button variant={variant} onClick={handleClick}>
      {name}
    </Button>
  );
}
