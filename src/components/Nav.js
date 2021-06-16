import { Col,Row, Container } from "reactstrap"



const NavigatinBar = () =>{
    return(
        <>
         <Container className='pt-3'>
             <Row className='py-4'>
                 <Col md='2'>
                    <span className='logo'>monarchy</span>
                 </Col>
                 <Col className='pt-2' md={{ offset: 4, size: 6 }}>
                     <ul className='list-inline m-0'>
                         <li className='list-inline-item nav_item'>Home</li>
                         <li className='list-inline-item nav_item'>Portfolio</li>
                         <li className='list-inline-item nav_item'>About</li>
                         <li className='list-inline-item nav_item'>Services</li>
                         <li className='list-inline-item nav_item'>Blog</li>
                         <li className='list-inline-item nav_item'>Contact</li>
                     </ul>
                 </Col>
             </Row>
         </Container>
        </>
    )
}

export default NavigatinBar;