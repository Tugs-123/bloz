import { Navbar, Nav,Button } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar bg="transparent" expand="lg" className="fj-navbar fj-nav-base">
            <Navbar.Brand className="fj-navbar-brand" href="/"> 
                      1234 тавтай морил
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  className="fj-navbar-item fj-navbar-link"  href="/">
              Нүүр
              </Nav.Link>
            </Nav>
            <Button variant="outline-success">Нэвтрэх</Button>
          </Navbar.Collapse>
      </Navbar>
  );
  }   