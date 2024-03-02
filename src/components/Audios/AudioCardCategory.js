import React, { useEffect, useRef, useState } from "react";
import "./audio.css";
import {
  Col,
  Container,
  Form,
  FormControl,
  NavDropdown,
  Row,
} from "react-bootstrap";
import search from "../../images/search.png";
import sortIcon from "../../images/sort-icon.png";
import profileCard from "../../images/profile-card.png";
import iconCard from "../../images/icon-1.png";
import iconCard2 from "../../images/icon-2.png";
import iconCard3 from "../../images/icon-3.png";
import pause from "../../images/pause.jpg";
import play from "../../images/play.png";
import heart from "../../images/heart.png";
import download from "../../images/download.png";
import NavBar from "../Navbar/NavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link,useParams  } from 'react-router-dom';
import { getAudioCategoryById, getAudioPublic } from "../../features/audios/audioSlice"

const AudioCardCategory = () => {
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [durationFormatted, setDurationFormatted] = useState('0:00');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      setDurationFormatted(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }
  }, [duration]);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  const params = useParams();

  // Now you can access the parameters using the keys defined in your route
  const { id } = params;
  const dispatch = useDispatch();

  const getDataOne = useSelector((state) => state.audio.audioCategoryId);

  const isLoading = useSelector((state) => state.audio.isLoading);
  const error = useSelector((state) => state.audio.error);

  console.log(getDataOne)
  useEffect(() => {
    dispatch(getAudioCategoryById(id));
  }, [dispatch,id]);
    return <>
     <NavBar />

     <Container >
     {!isLoading ? (
          getDataOne ? (
            getDataOne.elder ? (
        <Row >
           <Col  >
            <div style={{position:'relative' , marginTop:'-35px'}}>
              <div style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'25px', paddingTop:'15px' , borderRadius:'25px'}} className=" background-image-card"> 
              <Row>
                <Col sm="6" xs='6' className=" d-flex " style={{marginTop :'-35px'}}  >
                  <img  src={getDataOne.image} width={200} height={180} alt="" style={{marginTop :'20px',borderRadius:'10px'}} />  
                </Col>
            
                <Col sm="3" xs='6' style={{display:'flex' , justifyContent:'center' , alignItems:'center'}} >
                <div style={{display:'flex' , flexDirection:'column' , marginRight:'-40px', marginLeft:'100px' }} >
                      <h5 style={{color:'rgba(5, 20, 39, 1)' , fontWeight:'bold'}}  > {getDataOne.elder.name}</h5>
                      <p>20 مقطع صوتي</p>
                  </div>
                </Col>

                <Col sm="3" xs='6' className=" icons  " >
                <div style={{display:'flex' , gap:'10px' , marginTop:'50px'}}>
                  <img src={iconCard} alt='' />
                  <img src={iconCard2} alt='' />
                  <img src={iconCard3} alt='' />
                </div>
                </Col>
              
              </Row>
             </div>
            </div>
          </Col>
        </Row> 

) : null
) : null
) : null}
     </Container>

     <Container >
       <div style={{marginLeft:'-55px', marginBottom: '15px', borderBottom:'1.5px solid #EEEEEE ', width:'100%' }}></div>
        <Row>
          <Col>
          <div className='d-flex justify-content-between mb-4'>

           <Form >
             <FormControl
               type="search"
               placeholder="ابحث..."
               className="me-2 w-100  "
               aria-label="Search"
               style={{ borderRadius: '25px' }}
              />
                <img src={search} alt='' width='20px' height="20px" style={{position:'absolute' , marginTop:'-30px' , marginRight:'70px'}}/>
           </Form>

          <div style={{display:'flex' , gap:'10px'}}>
           <img src={sortIcon} alt='' width='15px' height="15px" style={{ marginRight:'5px', position:'absolute' , marginTop:'10px'}} />
              <NavDropdown title="الترتيب حسب" id="collapsible-nav-dropdown" style={{background:'linear-gradient(0deg, rgba(209, 155, 111, 0.15), rgba(209, 155, 111, 0.15)),linear-gradient(0deg, rgba(209, 155, 111, 0.1), rgba(209, 155, 111, 0.1))' 
                , border:'1.5px solid rgba(209, 155, 111, 0.1)' ,borderRadius:'25px' , padding:'5px 25px 5px 10px' , color:'rgba(209, 155, 111, 1)' , fontWeight:'bold' } }>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
          </div>

          </div>
          </Col>
        </Row>
     </Container>

     <Container>
     {!isLoading ? (
          getDataOne ? (
            getDataOne.elder ? (
              <>
       <Row className='me-auto'  md={4}>
        <Col > 
          <div style={{display:'flex'}}>
          <img  src={getDataOne.image} alt="" style={{}} width='61px' height='61px' />
          <p style={{color:'rgba(17, 32, 34, 1)' , fontWeight:'bold' , display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'15px'}}> {getDataOne.title} </p>
          </div> 
         </Col>
     
        <Col xs={6}><p style={{color:'rgba(130, 130, 130, 1)' , display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'15px'}}  > {getDataOne.elder.name} </p></Col>

        <Col xs={6} > <p style={{color:'rgba(130, 130, 130, 1)' , display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'15px' }}  >
        {durationFormatted} دقيقة</p>
         </Col>


        <Col>
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' , padding:'15px' ,  gap:'15px'}}>
                 <img src={download} alt='' />
                 <img src={heart} alt=''/>
                 <img src={isPlaying ? pause : play} alt='' width="45px" height="45px" onClick={handlePlay} />
      <audio ref={audioRef} src={getDataOne.audio} controls hidden onLoadedMetadata={handleLoadedMetadata} />

               </div></Col>
       </Row>
        <div style={{marginLeft:'-55px', marginBottom: '15px', borderBottom:'1.5px solid #EEEEEE ', width:'100%' }}></div>
        </>
        ) : null
        ) : null
        ) : null}

     
    </Container>
    </>;
}
export default AudioCardCategory;