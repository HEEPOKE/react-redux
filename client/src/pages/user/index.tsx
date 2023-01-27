import { useContext, useState } from "react";
import { Button, Card, Container, Modal } from "react-bootstrap";
import NavbarCommon from "../../common/Navbar";
import HeaderCommon from "../../common/Header";
import CardHeaderCommon from "../../common/CardHeader";
import ButtonModal from "../../common/ButtonModal";
import ModalCommon from "../../common/ModalCommon";
import TableCommon from "../../common/TableCommon";
import { UserContext } from "../../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserPage() {
  const {
    user,
    setUser,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    role,
    setRole,
    handlerSubmit,
    reGetUser,
  } = useContext(UserContext);

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
                row={user.map((item: any, i: any) => (
                  <tr key={i}>
                    <td>{item.ID}</td>
                    <td>
                      {item.firstName} {item.lastName}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                      <Button type="button" className="btn btn-warning mx-2">
                        <FontAwesomeIcon icon={["fas", "pen"]} size={"xl"} />
                      </Button>
                      <Button type="button" className="btn btn-danger">
                        <FontAwesomeIcon
                          icon={["fas", "trash-can"]}
                          size={"xl"}
                        />
                      </Button>
                    </td>
                  </tr>
                ))}
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
