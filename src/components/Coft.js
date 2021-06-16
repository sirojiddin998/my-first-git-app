import { Col,Row, Container } from "reactstrap"


const Coft=()=>{
    return(
        <>
          <Container>
              <Row>
                  <Col md='3' className='mt-5'>
                      <h1 className='text-muted'>Google</h1>
                  </Col>
                  <Col md='3' className='mt-5'>
                      <h1 className='text-muted'><span className='orqasi'><i>in</i></span>vision</h1>
                  </Col>
                  <Col md='3' className='mt-5'>
                      <h1 className='text-muted'>Fasebook</h1>
                  </Col>
                  <Col md='3' className='mt-5'>
                      <h1 className='text-muted'>Microsoft</h1>
                  </Col>
              </Row>
          </Container>
        </>
    )
};

export default Coft;