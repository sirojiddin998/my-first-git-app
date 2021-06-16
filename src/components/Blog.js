import { CardBody, CardImg, Col, Container, Row } from "reactstrap";
import cor_1 from '../media/1.jpg';
import cor_2 from '../media/2.jpg';
import cor_3 from '../media/3.jpg';
import inson from '../media/rasm_1.jpg';




const Blog =()=>{
    return(
        <>
          <Container fluid className='mt-5 umumiyR p-5'>
              <Row>
                  <Col md='6' className='text-start mb-4'>
                      <h3>Blog Updates</h3>
                      <p className='text-muted fs-6 py-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum neque repellat, eligendi atque quae tempora porro natus ex voluptate?
                      </p>
                  </Col>
                
                 <Row>
                     <Col md='4'>
                        <CardImg src={cor_1} alt='nomi'/>
                        <CardBody className='text-start'>
                            <h5>Octobr 15, 2021</h5>
                            <h4>Google saying pseeudo-telephoto is more importent</h4>
                        </CardBody>
                      <Row>
                          <Col md='5'>
                              <CardImg className='bordeR' src={inson} alt='nomi'/>
                          </Col>
                          <Col md='7'>
                            <p className='py-4 text-start ortaga'>
                                by Joon Fremeen Think Designer
                            </p>
                          </Col>
                      </Row>
                     </Col>
                     <Col md='4'>
                        <CardImg src={cor_2} alt='nomi'/>
                          <CardBody className='text-start'>
                            <h5>Octobr 15, 2021</h5>
                            <h4>Google saying pseeudo-telephoto is more importent</h4>
                        </CardBody>
                      <Row>
                          <Col md='5'>
                              <CardImg className='bordeR' src={inson} alt='nomi'/>
                          </Col>
                          <Col md='7'>
                            <p className='py-4 text-start ortaga'>
                                by Joon Fremeen Think Designer
                            </p>
                          </Col>
                      </Row>
                     </Col>
                     <Col md='4'>
                        <CardImg src={cor_3} alt='nomi'/>
                          <CardBody className='text-start'>
                            <h5>Octobr 15, 2021</h5>
                            <h4>Google saying pseeudo-telephoto is more importent</h4>
                        </CardBody>
                      <Row>
                          <Col md='5'>
                              <CardImg className='bordeR' src={inson} alt='nomi'/>
                          </Col>
                          <Col md='7'>
                            <p className='py-4 text-start ortaga'>
                                by Joon Fremeen Think Designer
                            </p>
                          </Col>
                      </Row>
                     </Col>
                  </Row>

                 
                </Row>
             
          </Container>
        </>
    )
}

        

    

export default Blog;