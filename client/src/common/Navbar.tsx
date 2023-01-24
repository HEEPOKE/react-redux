import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import RightMenu from "../components/Navbar/RightMenu";

export default function NavbarCommon() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Topic</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link>Product</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/user">
              <Nav.Link>User</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Manage" id="nav-dropdown" menuVariant="dark">
              <LinkContainer to="/create-product">
                <NavDropdown.Item>Create</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <RightMenu />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
