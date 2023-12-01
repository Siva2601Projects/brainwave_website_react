import { useEffect, useState } from "react";
import $ from 'jquery';
import 'slick-carousel/slick/slick.min.js'; // Import Slick Carousel JS
//import 'slick-carousel/slick/slick.css'; 
import '../../slick.css';
import { DialogActions } from "@mui/joy";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import CallBackDialog from "../Components/callback_dialog";


const FeaturedCourses=()=>{

    const [callBackDialog, setCallBackDialog] = useState(false);

    useEffect(()=>{
        // courses-area
        const slickElement = $('.courses-actives');
        //console.log('length', slickElement.length);
        
        setTimeout(()=>{
        try{
            if(slickElement.length > 0)
            {
                $('.courses-actives').slick({
                        dots: false,
                        infinite: true,
                        autoplay: true,
                        speed: 400,
                        arrows: true,
                        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
                        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false
                            }
                        },
                        ]
                });
            }
        }catch{
            console.log('exception')
        }
        }, 10);
   
     }, []);
     
     const handleDialogClose = () => {
        console.log('closed');
        setCallBackDialog(false);
    };

    return(
        <div>
            <div className="courses-area section-padding40 fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <h2>Our featured courses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="courses-actives" >
                        <div className="properties pb-20">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/featured1.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>User Interface</p>
                                    <h3><a href="#">Empower Your Apps with Flutter's Versatile Development</a></h3>
                                    <p>A powerful framework by Google for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.

                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span style={{fontSize:'12px'}}>Starts from </span><span>₹8000</span>
                                        </div>
                                    </div>
                                    <a onClick={(e)=>{
                                        //e.preventDefault();
                                        setCallBackDialog(true);
                                    }} className="border-btn border-btn2">Know More</a>
                                </div>

                            </div>
                        </div>

                        <div className="properties pb-20">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/react.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Frontend React</p>
                                    <h3><a href="#">Revolutionize Interfaces: Frontend Development with React</a></h3>
                                    <p>Transform & Craft Exceptional User Interfaces: Unleash & Harness the Frontend Power with React's Scalable, Component-Based Development.
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span style={{fontSize:'12px'}}>Starts from </span><span>₹8000</span>
                                        </div>
                                    </div>
                                    <a onClick={(e)=>{
                                        //e.preventDefault();
                                        setCallBackDialog(true);
                                    }} className="border-btn border-btn2">Know More</a>
                                </div>
                            </div>
                        </div>
                        <div className="properties pb-20">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/embedded_systems.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Embedded Systems</p>
                                    <h3><a href="#">Unlock Innovation: Exploring Embedded Systems Technology</a></h3>
                                    <p>Discover Boundless Opportunities: Mastering Embedded Systems for Pioneering Technological Innovations and Limitless Career Paths.

                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span style={{fontSize:'12px'}}>Starts from </span><span>₹8000</span>
                                        </div>
                                    </div>
                                    <a onClick={(e)=>{
                                        //e.preventDefault();
                                        setCallBackDialog(true);
                                    }} className="border-btn border-btn2">Know More</a>
                                </div>

                            </div>
                        </div>
                        <div className="properties pb-20">
                            <div className="properties__card">
                                <div className="properties__img overlay1">
                                    <a href="#"><img src="assets/img/gallery/development-cycle.png" alt="" /></a>
                                </div>
                                <div className="properties__caption">
                                    <p>Full Stack Development</p>
                                    <h3><a href="#">Full Stack Mastery: Dive into MERN Development</a></h3>
                                    <p>MERN Full Stack: Seamlessly build dynamic web applications using MongoDB, Express.js, React, and Node.js, mastering every layer of modern web development.
                                    </p>
                                    <div className="properties__footer d-flex justify-content-between align-items-center">
                                        <div className="restaurant-name">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half"></i>
                                            </div>
                                            <p><span>(4.5)</span> based on 120</p>
                                        </div>
                                        <div className="price">
                                            <span style={{fontSize:'12px'}}>Starts from </span><span>₹8000</span>
                                        </div>
                                    </div>
                                    <a onClick={(e)=>{
                                        //e.preventDefault();
                                        setCallBackDialog(true);
                                    }} className="border-btn border-btn2">Know More</a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            
            {<CallBackDialog dialogOpen={callBackDialog} handleCloseCallback={()=>{setCallBackDialog(false)}}/>}

        </div>
    )
};

export default FeaturedCourses;