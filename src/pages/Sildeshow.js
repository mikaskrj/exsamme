import React, { useEffect } from 'react'
import '../scss_stuff/slideshow.scss'
import { runSlideshow } from '../pages/Slide'
import { FiChevronRight , FiChevronLeft} from "react-icons/fi";

import slide1 from '../imgs/slide1.jpg'
import slide2 from '../imgs/slide2.jpg'
import slide3 from '../imgs/slide3.jpg'


const Sildeshow = () => {

    useEffect(() => {

        runSlideshow();

    }, [])



    return (
        <div className="slideshow-container">

            <div className="mySlides fade">

                <img className="slideimg" src={slide1} alt="" style={{ "width": "100%" }} />
                <div className="text">Vi elsker at lave brød</div>
            </div>

            <div className="mySlides fade">

                <img src={slide2} alt="" style={{ "width": "100%" }} />
                <div className="text">noget om brød</div>
            </div>

            <div className="mySlides fade">

                <img src={slide3} alt="" style={{ "width": "100%" }} />
                <div className="text">Caption Text</div>
            </div>
              
            <div className="dot_container" >
                    <span className="dot dot1" ></span>
                    <span className="dot dot2" ></span>
                    <span className="dot dot3" ></span>
                </div>

            <div>
                <button className="prev" ><FiChevronLeft/></button>
                <button className="next" ><FiChevronRight/></button>
            </div><br />




        </div>
    )
}

export default Sildeshow
