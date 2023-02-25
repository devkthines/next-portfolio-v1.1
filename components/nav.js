import Nav from 'react-bootstrap/Nav';
export default function Navigation() {
  return (
    <>
      <Nav id='nav'
        activeKey="/"
      >
        <Nav.Item >
          <Nav.Link href="/" >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/resume'>Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/projects'>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/contact'>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
};