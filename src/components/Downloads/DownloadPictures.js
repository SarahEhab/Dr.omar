import React from 'react';
import NavBar from '../Navbar/NavBar';
import { Col, Container, Row } from 'react-bootstrap';
import deleteicon from "../../images/deleteicon2.png";
import { Link } from 'react-router-dom';
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.png";
import pic6 from "../../images/pic6.png";
import pic7 from "../../images/pic7.png";
import pic8 from "../../images/pic8.png";

const DownloadPictures = () => {
    return <>
    <NavBar />

    <Container  >
    <Row>
    <Col>
    <div style={{position:'relative' , marginTop:'-35px'}}>
      <h1 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'25px', paddingTop:'15px' , borderRadius:'25px'}} className=" background-image"> التحميلات  </h1>
    </div>
    </Col>
    </Row>
    </Container>

     <Container className='d-flex justify-content-center align-items-center' >
<Row className="m-3 justify-content-center align-items-center">
<Col xs="6" md="2" lg="2" style={{ textAlign: 'center', marginBottom: '10px' , paddingLeft:'120px'}}>

<div style={{border :'1.38px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
  background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)' }}>

  <Link to='/DownloadScientest' style={{textDecoration:'none'}} >
<h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}> العلماء </h6>
  </Link>

</div>
</Col>

<Col xs="6" md="2" lg="2" style={{ textAlign: 'center', marginBottom: '10px' , paddingLeft:'120px'}}>
<div style={{border :'1.38px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)' }}>

<Link to='/DownloadAudios' style={{textDecoration:'none'}}>
<h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}> صوتيات </h6>
</Link>
    
</div>
</Col>

<Col xs="6" md="2" lg="2" style={{ textAlign: 'center', marginBottom: '10px' , paddingLeft:'120px'}}>
<div style={{border :'1.38px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
   background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)' }}>

   <Link to='/DownloadBook' style={{textDecoration:'none'}}>
   <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px' }}> كتب  </h6>
   </Link>
    
</div>
</Col>


<Col xs="6" md="2" lg="2" style={{ textAlign: 'center', marginBottom: '10px' , paddingLeft:'120px'}}>
<div style={{border :'1.38px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
  background:'linear-gradient(331.41deg, #D19B6F 6.78%, #F6E5C3 204.87%)' }}>

     <Link to='/Downloadpictures' style={{textDecoration:'none'}}>
          <h6 style={{  color:'#FFFFFF' , fontSize:'15px', marginTop:'5px'}}>   صور </h6>
          </Link>
</div>
</Col>


</Row>
    </Container>

     <Container >
      <Row class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3" style={{margin:'35px'}}  >
        <Col>
            <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px' }}  />
            <img  src={pic1} alt='' style={{marginBottom:'20px'}}/>
        
        <div>
            <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px' }}  />
            <img  src={pic2} alt='' style={{marginBottom:'20px'}}/>
        </div>
        </Col>

        <Col >
            <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px'}}  />
            <img  src={pic5} alt='' style={{marginBottom:'20px'}}/>

           <div>
              <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px'}}  />
              <img  src={pic6} alt='' style={{marginBottom:'20px'}}/>
           </div> 
        </Col>

        <Col >
          <div>
            <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px'}}  />
             <img  src={pic3} alt='' style={{marginBottom:'20px'}}/>
         </div>
           
           <div>
              <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px'}}  />
              <img  src={pic4} alt='' style={{marginBottom:'20px'}}/>
           </div>       
        </Col>

        <Col >
          <div>
              <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px'}}  />
              <img  src={pic7} alt='' style={{marginBottom:'20px'}}/>
          </div>
            
          <div>
             <img src={deleteicon} style={{position:'absolute' , zIndex:'2' , margin:'15px'}}  />
               <img  src={pic8} alt='' style={{marginBottom:'20px'}}/>
          </div>
        </Col>  
      </Row>
     </Container>

    </>;
}
export default DownloadPictures;