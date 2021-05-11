import React from 'react'; 
import { Carousel } from 'react-bootstrap';   
import Slide1 from "../images/slides/1.jpg"; 
import Slide2 from "../images/slides/2.jpg"; 
import Slide3 from "../images/slides/3.jpg"; 
import 'bootstrap/dist/css/bootstrap.min.css';  


const Header = () => {
    return (  
  <div>  
      <header> 
      
       <Carousel indicators={false}  controls={false} fade={true} pause={false}>
      <Carousel.Item  interval={2000}> 

        <img 
          className="d-block w-100"
          src={Slide1}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h1>Digital Experience</h1>
          <h3>Transforming today’s workforce for tomorrow and beyond</h3>
        </Carousel.Caption>
      </Carousel.Item> 

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src={Slide2}
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h1>Intelligent solutions</h1>
          <h3>Providing scalable solutions leveraging legacy and next gen technologies</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 "
          src={Slide3}
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h1>Digital Solutions</h1>
          <h3>Reimagine your business with hands on partner<br/> to support you define, design and deliver solutions.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 


            {/* <div class="owl-carousel owl-theme"> */}
                {/* <div class="item">
                    <img src= {Slide1} alt="images not found" />
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line"></div>
                                <h2>Digital Experience</h2> */}
                                {/* <!-- <h1>Start-ups and solutions</h1> --> */}
                                {/* <h4>Transforming today’s workforce for tomorrow and beyond</h4>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div class="item">
                    <img src="images/slides/2.jpg" alt="images not found" />
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line animated bounceInLeft"></div>
                                <h2>Intelligent solutions</h2>
                                <h4>Providing scalable solutions leveraging legacy and next gen technologies</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="images/slides/3.jpg" alt="images not found" />
                    <div class="cover">
                        <div class="container">
                            <div class="header-content">
                                <div class="line animated bounceInLeft"></div>
                                <h2>Digital Solutions</h2>
                                <h4>Reimagine your business with hands on partner<br/> to support you define, design and
                                    deliver solutions.</h4>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
        </header>
    
  </div>

     );
}
 
export default Header;