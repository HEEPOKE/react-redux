import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavLogout() {
  return (
    <>
      <NavDropdown.Item>
        <FontAwesomeIcon
          icon={["fas", "right-from-bracket"]}
          className="mx-2"
        />
        Logout
      </NavDropdown.Item>
    </>
  );
}
