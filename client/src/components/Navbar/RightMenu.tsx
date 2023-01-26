import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogout from "./NavLogout";

export default function RightMenu() {
  const Authorization = sessionStorage.getItem("Authorization");

  if (Authorization != null) {
    return (
      <>
        <NavDropdown title="Profile" id="nav-dropdown" menuVariant="dark">
          <LinkContainer to="/profile">
            <NavDropdown.Item>
              <FontAwesomeIcon icon={["fas", "user"]} className="mx-2" />
              Profile
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item>Another action</NavDropdown.Item>
          <NavDropdown.Item>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavLogout />
        </NavDropdown>
      </>
    );
  } else {
    return (
      <>
        <LinkContainer to="/auth/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/auth/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
      </>
    );
  }
}