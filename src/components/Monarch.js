import { Col, Container, Row } from "reactstrap"



const Monarch =()=>{
    return(
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md='3' className='text-start'>
                        <h5 className='mon'>Monarchy</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit sit rem quo? Asperiores nemo earum provident dicta cumque, officia aliquid?</p>
                    </Col>
                    <Col md='3' className='text-start'>
                        <p>Contact Us</p>
                        <p>hello@mydomain.com</p>
                        <p>+998 90 540 46 42</p>
                        <p>Support</p>
                    </Col>
                    <Col md='3' className='text-start'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Blog</p>
                    </Col>
                    <Col md='3' className='text-start'>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Blog</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Monarch;
                      