import { useState } from "react";
import CallBackDialog from "./Components/callback_dialog";

const MainContainer=()=>{


    const [dialogOpen, setDialogOpen] = useState(false);

    const handleCloseDialog=()=>{
        setDialogOpen(false);
    };

    return(
        <div>
            <section className="slider-area ">
                <div className="slider-active">
                    
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-12">
                                    <div className="hero__caption">
                                        <h1 data-animation="fadeInLeft" data-delay="0.2s">Software Skills<br /> Hub</h1>
                                        <p data-animation="fadeInLeft" data-delay="0.4s">Cultivate abilities: Develop skills with offline courses, certificates, and practicals led by expert engineers.</p>
                                        <a href="#" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.7s" onClick={(e)=>{
                                            e.preventDefault();
                                            setDialogOpen(true);
                                        }}>Get a callback</a>
                                    </div>
                                </div>
                            </div>
                        </div>          
                    </div>
                </div>
            </section> 

            <CallBackDialog dialogOpen={dialogOpen} handleCloseCallback={handleCloseDialog} />
        </div>
    );
};

export default MainContainer;