import { Col, Container, Row } from "reactstrap"


const WelomContent = () =>{
    return(
        <>
         <Container className='p-2 px-2'>
            <Row>
                <Col className='py-5 text-center' >
               <div className='p-5 mx-5'>
               <h1 className='defaultColor'>Do What You Love</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem nulla quos   suscipit laborum fugit aspernatur rem sit amet, consectetur adipisicing elit. Atque autem .</p>
                 <span className='play_icon'><i className='fas fa-play'></i></span>
               </div>
                </Col>
            </Row>
         </Container>
        </>
    )
}

export default WelomContent;
              