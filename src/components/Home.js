import React ,{useState,useEffect} from 'react';

import tree from "./../assets/tree.webp"
import gun1 from "./../assets/gun1.png"
import gun2 from "./../assets/gun2.png"
import gun3 from "./../assets/gun3.png"
import gun4 from "./../assets/gun4.png"
import acc1 from "./../assets/acc1.png"
import acc2 from "./../assets/acc2.png"
import acc3 from "./../assets/acc3.png"
import acc4 from "./../assets/acc4.png"
import fun1 from "./../assets/fun1.png"
import house from "./../assets/house.webp"
import chart from "./../assets/chart.png"

import arrow from "./../assets/arrow.png"
import {FaDiscord, FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineDown,AiOutlineCopy} from 'react-icons/ai'
import brand from "./../assets/brand.png"
import { Image, ButtonGroup,Col, Button, Row, Card, Container } from "react-bootstrap";
import {Image as CloudImage} from 'cloudinary-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function Home() {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      
      items:4,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 30
      
    }
  };
  

    return (
        <>
         <div className="back">
          
          <img src={tree} alt="trees over bg" className=" w-100 img-fluid tree-img " style={{background:'transparent'}}/>
           
           
           </div>
           <div style={{height: '100vh'}}>
             <Container fluid className="front d-flex  align-items-center justify-content-center  bg-black bg-photo " style={{height: '100vh'}}>
            <div className="front float-right-top d-flex">
             <a className="btn m-2 btn-dark bg-accent front rounded-circle border-0 d-flex justify-content-center align-items-center p-2" href="#" role="button"><FaDiscord size={24} /></a>
             <a className="btn m-2 btn-dark bg-accent2 front rounded-circle border-0 d-flex justify-content-center align-items-center p-2" href="#" role="button"><FaTelegramPlane size={24}/></a>
            </div>
            <section className="front  mx-auto my-auto d-flex flex-column justify-content-center align-items-center  w-100  ">
              
          
         <img src={brand} alt="VapoBlitz" className="front img-fluid img-brand up-small" />
               <hr color="#fff"/>
               <ButtonGroup vertical className="front">
               <Button variant="dark" className="front bg-accent  my-1  py-2 px-3 rounded-3 up-small border-0 btn-sha">Play For Free</Button>
               
               <Button variant="dark" className=" front bg-accent2 my-1  p-2 rounded-3 up-small border-0 btn-sha">Marketplace</Button>
               </ButtonGroup>
            </section>
         <a name="features"/>
       
    </Container>
    <a href="#features" className="text-center nav-link text-white front float-bottom mx-auto"><img src={arrow} width="32"/></a>
   
    </div>
        
    
    
    <Container fluid className="  d-flex flex-column py-5  bg-section1" >
      <h3 className="text-center text-white fs-2 pb-3">What is Vaporblitz?</h3>
        <p className="text-center align-self-center text-white fs-5 fw-light w-75  ">
        Vaporblitz is a PVP - P2E game where you
fight against other players online for BNB or VPR. 
All in-game items are NFTS.

 Our goal is for Vaporblitz to be fun whilst also being able
to make money in the process.
        </p>
    </Container>
    <Container fluid className="  d-flex flex-column py-5  bg-section2" >
      <h3 className="text-center text-white fs-2 pb-1">Collect NFT Items?</h3>
      
      <h3 className="text-center text-white fs-5 fw-light pb-3">All usable in Game!</h3>
        <Container>
            <Row className="mt-5 text-light"><span className="fs-5">NFT Weapon Skins</span></Row>
            <Carousel responsive={responsive}
         additionalTransfrom={0}
         autoPlay={true}
         autoPlaySpeed={500}
         centerMode={false}
        transitionDuration={1000}
            infinite={true}
            
            focusOnSelect={false}
            swipeable={false}
            draggable={false}
           
            ssr
            removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]}

      
            className="py-3 "
            
          >
            <div className="text-center carshadow "><img src={gun1} className="img-fluid w-75 p-0 "/></div>
            <div className="text-center carshadow"><img src={gun2} className="img-fluid w-75 p-0  "/></div>
            <div className="text-center carshadow"><img src={gun3} className="img-fluid w-75 p-0  "/></div>
            <div className="text-center carshadow"><img src={gun4} className="img-fluid w-75 p-0  "/></div>
          
          </Carousel>
       
         <Row className=" mt-5 text-light"><span className="fs-5">NFT Accessories</span></Row>
         <Carousel responsive={responsive}
         additionalTransfrom={0}
         autoPlay={true}
         autoPlaySpeed={1500}
         centerMode={false}
        transitionDuration={1000}
            infinite={true}
            
            focusOnSelect={false}
            swipeable={false}
            draggable={false}
           
            ssr
            removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]}

      
            className="py-3 "
            
          >
         <div className="text-center carshadow "><img src={acc1} className="img-fluid w-75 p-0  "/></div>
         
         <div className="text-center carshadow"><img src={acc2} className="img-fluid w-75 p-00  "/></div>
         
         <div className="text-center carshadow"><img src={acc3} className="img-fluid w-75 p-0  "/></div>
         
         <div className="text-center carshadow"><img src={acc4} className="img-fluid w-75 p-0  "/></div>
       
           </Carousel>
           
         
        </Container>
       
    </Container>
    <Container fluid className="  d-flex flex-column py-5  bg-section1" >
      <h3 className="text-center text-white fs-2 pb-3">Complete PVP System</h3>
        <p className="text-center align-self-center text-white fs-5 fw-light w-75  ">
        Fun and Fast-Paced Gameplay with different maps and weapons to choose from.
        </p>
        <Row>
             <Col md={4} className="m-auto  ">
             <div className="m-auto text-center">
               <div className="mt-5 mb-3 mx-auto d-flex flex-column rounded-3 align-items-center" style={{boxShadow:'0px 3px 20px 0px #111',height:'40vh' ,width:'40vh'}}><img src={fun1} className="img-fluid w-75 p-3 m-auto  "/>
             <h4 className="text-white">Fun Weapons</h4>
             </div>
             <p className="text-light">Over 10 weapons with different abilities</p>
             
             </div>
         </Col>
             <Col md={4} className="m-auto ">
             <div className="m-auto text-center">
               <div className="mt-5 mb-3 mx-auto d-flex flex-column rounded-3 align-items-center" style={{boxShadow:'0px 3px 20px 0px #111',height:'40vh' ,width:'40vh'}}><img src={fun1} className="img-fluid w-75 p-3 m-auto  "/>
             <h4 className="text-white">Fun Weapons</h4>
             </div>
             <p className="text-light">Over 10 weapons with different abilities</p></div>
          </Col>
             <Col md={4} className="m-auto ">
             <div className="m-auto text-center">
               <div className="mt-5 mb-3 mx-auto d-flex flex-column rounded-3 align-items-center" style={{boxShadow:'0px 3px 20px 0px #111',height:'40vh' ,width:'40vh'}}><img src={fun1} className="img-fluid w-75 p-3 m-auto  "/>
             <h4 className="text-white">Fun Weapons</h4>
             </div>
             <p className="text-light">Over 10 weapons with different abilities</p></div>
         </Col>
        
         


         </Row>
        <h4 className="text-white text-center mt-5">Fight On Different Maps</h4>
         
    </Container>
    <Container fluid className="  d-flex flex-column py-5  bg-section2" >
      <h3 className="text-center text-white fs-2 pb-3">Fight Bosses for VPR</h3>
        <p className="text-center align-self-center text-white fs-5 fw-light w-75  ">
        Fight Bosses in P2E and win VPR.</p>
        
        <Row>
             <Col md={4} className="m-auto ">
             <div className="m-auto text-center   ">
             <div className="mt-5 mb-3 mx-auto d-flex flex-column rounded-3 align-items-center" style={{boxShadow:'0px 3px 20px 0px #111',height:'40vh' ,width:'40vh'}}>
            
               <CloudImage cloudName="vaporblitz" publicId="diceguyidle_v0kkue" className="img-fluid w-100 p-0 m-auto " />
            
             </div>
             <h4 className="text-white">Dice Guy</h4>
              
             
             </div>
         </Col>
             <Col md={4} className="m-auto">
             <div className="m-auto text-center">
             <div className="mt-5 mb-3 mx-auto d-flex flex-column rounded-3 align-items-center" style={{boxShadow:'0px 3px 20px 0px #111',height:'40vh' ,width:'40vh'}}>
         
             <CloudImage cloudName="vaporblitz" publicId="pineapple_squid2_g3ho0z" className="img-fluid w-100"/>
       </div>
             <h4 className="text-white">Pineapple Squid</h4></div>
          </Col>
             <Col md={4} className="m-auto">
             <div className="m-auto text-center">
             <div className="mt-5 mb-3 mx-auto d-flex flex-column rounded-3 align-items-center" style={{boxShadow:'0px 3px 20px 0px #111',height:'40vh' ,width:'40vh'}}>
         
             <CloudImage cloudName="vaporblitz" publicId="tvguyloop_hbezbl" className="img-fluid w-100 "/>
  </div>
             <h4 className="text-white">Tv Guy</h4>
             </div>
          </Col>
        
              


         </Row>
        <p className="mt-3 text-center align-self-center text-white fs-5 fw-light w-75  ">
        Fight different bosses in PVE, bosses have different attack styles and
abilities. After beating a boss you are rewarded with $VPR.</p>
        
    </Container>
    <Container fluid className="  d-flex flex-column py-5  bg-section1" >
      <h3 className="text-center text-white fs-2 pb-3">Own and Customise an NFT Home</h3>
        <p className="text-center align-self-center text-white fs-5 fw-light w-75  ">
        Buy a property, customise it and earn daily VPR from it.</p>
        <img src={house} className="img-fluid w-50 align-self-center"/>
        <p className="text-center align-self-center text-white fs-5 fw-light w-75  ">
        The more expensive the property, the higher the daily rewards</p>
      
       
    </Container>
    <Container fluid className="  d-flex flex-column py-5  bg-section2" >
      <h3 className="text-center text-white fs-2 pb-3">Customise your Character</h3>
        <p className="text-center align-self-center text-white fs-5 fw-light w-75  ">
        Pick from different clothes, accessories and more.</p>
       
       
    </Container>
    <Container fluid className="  d-flex flex-column py-5  bg-section1" >
      <h3 className="text-center text-white fs-2 pb-3">Tokenomics</h3>
        <p className="text-center align-self-center text-white fs-5 fw-light w-75  ">
        The games main token's tokenomics</p>
        <img src={chart} className="img-fluid w-50 align-self-center"/>
     
       
       
    </Container>
    <Container fluid className="  d-flex flex-column py-5  bg-section2" >
      <h3 className="text-center text-shadow text-white fs-2 pb-3">Buy $VPR</h3>
        <p className="text-center text-shadow align-self-center text-white fs-5 fw-light w-75  ">
        Buy the games main token on pancakeswap</p>
        <div className="text-center">
          <ButtonGroup vertical >
        <Button variant="dark" className="rounded border-0  btn-grad2 bg-accent  py-1 my-2 ">Buy on Pancakeswap </Button>
               
               <Button variant="dark" className="rounded border-0   btn-grad1  bg-accent2 py-1 my-2 text-break ">0x3298473508089428040 <AiOutlineCopy/> </Button>
          </ButtonGroup>
           </div> 
            <a className=" text-center mt-3" style={{color:'#E46161'}}>How to setup wallet and buy</a>
       
       
    </Container>
   
        </>
    )
}
