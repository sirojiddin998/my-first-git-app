import { CardImg, Col, Container, Row } from "reactstrap"
import img from '../media/1.jpg' ; 
import img_1 from '../media/2.jpg' ; 
import img_2 from '../media/3.jpg' ; 
import img_3 from '../media/4.jpg' ; 
import img_4 from '../media/5.jpg' ; 
import img_5 from '../media/6.jpg' ; 


const Portfolio = ()=>{
    return(
        <>
         <Container>
             <Row>
                 <h2 className='text-start mb-2'>Portfolio</h2>
                 <Col md='4' className='text-start'>
                 <CardImg className='rasm' src={img} alt='rasm' />  
                 </Col>
                 <Col md='4' className='text-start'>
                 <CardImg className='rasm' src={img_1} alt='rasm' />  
                 </Col>
                 <Col md='4' className='text-start'>
                 <CardImg className='rasm' src={img_2} alt='rasm' />  
                 </Col>
                 <Col md='4' className='text-start'>
                 <CardImg className='rasm' src={img_3} alt='rasm' />  
                 </Col>
                 <Col md='4' className='text-start'>
                <CardImg className='rasm' src={img_4} alt='rasm' />  
                 </Col>
                 <Col md='4' className='text-start'>
                 <CardImg className='rasm' src={img_5} alt='rasm' />  
                 </Col>
             </Row>
         </Container>
        </>
    )
}
export default Portfolio;