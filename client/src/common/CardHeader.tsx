import { Card } from "react-bootstrap";
import CardHeaderInterface from "../interface/CardHeaderInterface";

export default function CardHeaderCommon({
  className,
  title,
}: CardHeaderInterface) {
  return (
    <Card.Header className={className}>
      <h4 className="mt-2">{title}</h4>
    </Card.Header>
  );
}
