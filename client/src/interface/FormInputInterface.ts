export default interface FormInputInterface {
  mb?: string;
  label: string;
  type: string;
  value?: string;
  setValue: (value: string) => void;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  required?: boolean;
}
