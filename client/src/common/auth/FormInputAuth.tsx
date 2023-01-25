import { Form } from "react-bootstrap";
import FormInputInterface from "../../interface/FormInputInterface";

export default function FormInputAuthCommon({
  mb,
  label,
  type,
  value,
  setValue,
  maxLength,
  minLength,
  placeholder,
  required,
}: FormInputInterface) {
  return (
    <Form.Group className={mb}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        value={value}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </Form.Group>
  );
}
