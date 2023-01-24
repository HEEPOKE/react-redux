import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import NavbarCommon from "../../common/Navbar";
import HeaderCommon from "../../common/Header";
import CardHeaderCommon from "../../common/CardHeader";
import ButtonModal from "../../common/ButtonModal";
import ModalCommon from "../../common/ModalCommon";

export default function UserPage() {
  const [show, setShow] = useState(false);
  return (
    <>
      <NavbarCommon />
      <HeaderCommon name="UserList" />
      <Container className="justify-center">
        <Card>
          <CardHeaderCommon className="bg-dark text-white" title="List User" />
          <Card.Body>
            <Container fluid>
              <ButtonModal variant="primary" name="add" setShow={setShow} />
            </Container>
          </Card.Body>
        </Card>
      </Container>

      <ModalCommon title="Add User" show={show} setShow={setShow} />
    </>
  );
}
