import { useEffect } from "react";
import $ from 'jquery';
import 'slick-carousel/slick/slick';

const Placements=()=>{


    useEffect(()=>{
        setTimeout(()=>{
            try{
                $('.team-active').slick({
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    speed: 400,
                    arrows: true,
                    prevArrow: '<button type="button" className="slick-prev"><i className="ti-angle-left"></i></button>',
                    nextArrow: '<button type="button" className="slick-next"><i className="ti-angle-right"></i></button>',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                      {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 4,
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
            }catch{
                console.log('exception');
            }
        }, 10);
    });

    return(
        <>
            <section className="team-area section-padding40 fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mb-55">
                            <h2>Our Graduates Placed in Leading Companies</h2>
                        </div>
                    </div>
                </div>
                <div className="team-active">
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team1.png" alt="" />
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Kalpana</a></h5>
                            <p>Picobytes Private Limited</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team2.png" alt="" />
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Derbin</a></h5>
                            <p>Picobytes Private Limited</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team3.png" alt="" />
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Hariharan</a></h5>
                            <p>Picobytes Private Limited</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team4.png" alt="" />
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Jai Jothi</a></h5>
                            <p>Picobytes Private Limited</p>
                        </div>
                    </div>
                    <div className="single-cat text-center">
                        <div className="cat-icon">
                            <img src="assets/img/gallery/team3.png" alt="" />
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">Dinesh</a></h5>
                            <p>Picobytes Private Limited</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Placements;