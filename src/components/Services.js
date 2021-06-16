import React, {Container, Row, Col} from 'reactstrap'


const Services = ()=>{
    return(
        <>
            <Container className='mt-5'>
                <Row >
                    <Col md='4' className='text-start'>
                        <p className='con'><i className='fas fa-briefcase'></i></p>
                        <h5>Interface Design</h5>
                        <p className='text-muted py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.
                        </p>
                    </Col>
                    <Col md='4' className='text-start'>
                        <p className='con'><i className='fas fa-couch'></i></p>
                        <h5>Product Design</h5>
                        <p className='text-muted py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.
                        </p>
                    </Col>
                    <Col md='4' className='text-start'>
                        <p className='con'><i className='fas fa-lightbulb'></i></p>
                        <h5>Quality Results</h5>
                        <p className='text-muted py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Services;