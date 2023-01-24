import { useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import NavbarCommon from "../../common/Navbar";
import HeaderCommon from "../../common/Header";
import CardHeaderCommon from "../../common/CardHeader";
import ButtonModal from "../../common/ButtonModal";
import ModalCommon from "../../common/ModalCommon";
import TableCommon from "../../common/Table";

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
              <TableCommon
                variant="dark"
                className="mt-3"
                columns={["#", "Name", "Email", "Role", "Manage"]}
                row={<></>}
              />
            </Container>
          </Card.Body>
        </Card>
      </Container>

      <ModalCommon
        title="Add User"
        show={show}
        setShow={setShow}
        content={
          <>
            <Modal.Body> modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </>
        }
      />
    </>
  );
}
