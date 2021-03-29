import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Menu = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>Template</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <LinkContainer to='/privacy'>
              <Nav.Link>Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/unsubscribe'>
            <Nav.Link>Unsubscribe</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
