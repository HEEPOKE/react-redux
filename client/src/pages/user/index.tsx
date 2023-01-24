import { Card, Container } from "react-bootstrap";
import NavbarCommon from "../../common/Navbar";
import HeaderCommon from "../../common/Header";
import CardHeaderCommon from "../../common/CardHeader";

export default function UserPage() {
  return (
    <>
      <NavbarCommon />
      <HeaderCommon name="UserList" />
      <Container className="justify-center">
        <Card>
          <CardHeaderCommon className="bg-dark text-white" title="List User" />
          <Card.Body>
            <Container fluid></Container>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
