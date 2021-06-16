import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap"
import fon_1 from '..//media/rasm_1.jpg';


const Test = () =>{
    return(
        <>
       <Container>
         <h3 className='py-4'>Testimonials</h3>
           <Row>
               <Col md='3 '>
                  <Card className='p-2 rang'>
                      <Row>
                        <Col md='7 '>
                           <p><span  className='p-2 rasmer' >Chad Hawkins</span><br/><span className='Ong'>Customer</span> </p>
                           <p></p>
                        </Col>
                        <Col md='5'>
                           <CardImg className='rad w-100 p-2 md-4' src={fon_1} alt='rasm'/>
                       </Col>
                      </Row>
                 
                     <CardBody>
                         <p className='text-start kulirang'>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!
                         </p>
                      </CardBody>
                  </Card>
               </Col>

               <Col md='3 '>
                  <Card className='p-2 rang'>
                      <Row>
                        <Col md='7 '>
                           <p><span  className='p-2 rasmer' >Chad Hawkins</span><br/><span className='Ong'>Customer</span> </p>
                           <p></p>
                        </Col>
                        <Col md='5'>
                           <CardImg className='rad w-100 p-2 md-4' src={fon_1} alt='rasm'/>
                       </Col>
                      </Row>
                 
                     <CardBody>
                         <p className='text-start kulirang'>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!
                         </p>
                      </CardBody>
                  </Card>
               </Col>

               <Col md='3 '>
                  <Card className='p-2 rang'>
                      <Row>
                        <Col md='7 '>
                           <p><span  className='p-2 rasmer' >Chad Hawkins</span><br/><span className='Ong'>Customer</span> </p>
                           <p></p>
                        </Col>
                        <Col md='5'>
                           <CardImg className='rad w-100 p-2 md-4' src={fon_1} alt='rasm'/>
                       </Col>
                      </Row>
                 
                     <CardBody>
                         <p className='text-start kulirang'>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!
                         </p>
                      </CardBody>
                  </Card>
               </Col>

               <Col md='3 '>
                  <Card className='p-2 rang'>
                      <Row>
                        <Col md='7 '>
                           <p><span  className='p-2 rasmer' >Chad Hawkins</span><br/><span className='Ong'>Customer</span> </p>
                           <p></p>
                        </Col>
                        <Col md='5'>
                           <CardImg className='rad w-100 p-2 md-4' src={fon_1} alt='rasm'/>
                       </Col>
                      </Row>
                 
                     <CardBody>
                         <p className='text-start kulirang'>
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus, numquam et vero aliquam delectus accusantium quo!
                         </p>
                      </CardBody>
                  </Card>
               </Col>
           </Row>
       </Container>

        </>
    )
}
export default Test;