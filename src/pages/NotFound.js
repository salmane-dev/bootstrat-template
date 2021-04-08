import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NotFound = () => {
  return (
    <Container fluid='md' className='mt-5 home-screen'>
      <Row>
        <Col>
          <div className='card'>
            <div className='card-header'>404</div>
            <div className='card-body'>
              <h5 className='card-title'>Custom 404 error page</h5> 
              <LinkContainer to='/'>
                <a href="/" className='btn btn-primary'>Home Page</a>
              </LinkContainer>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
