import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Menu = () => {

  const menu_item = "px-3 h5 text-white menu_item m-auto"
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className="h3">Template</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/'>
              <Nav.Link className={menu_item}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/privacy'>
              <Nav.Link className={menu_item}>Privacy</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/unsubscribe'>
            <Nav.Link className={menu_item}>Unsubscribe</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
            <Nav.Link className={menu_item}>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
