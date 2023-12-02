import { useState } from "react";
import CallBackDialog from "../Components/callback_dialog";

const AboutHighLights3 = ()=>{

    const [callbackDialog, setCallBackDialog] = useState(false);

    const handleCloseDialog=()=>{
        setCallBackDialog(false);
    };

    return(
        <>
            <section className="about-area2 fix pb-padding">
                <div className="support-wrapper align-items-center">
                    <div className="right-content2">
                        
                        <div className="right-img">
                            <img src="assets/img/gallery/about2.png" alt="" />
                        </div>
                    </div>
                    <div className="left-content2">
                        
                        <div className="section-tittle section-tittle2 mb-20">
                            <div className="front-text">
                                <h2 className="">Take the next step
                                    toward your personal
                                    and professional goals
                                with us.</h2>
                                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                                <a href="/" className="btn" onClick={(e)=>{
                                    e.preventDefault();
                                    setCallBackDialog(true);
                                }}>Join us now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CallBackDialog dialogOpen={callbackDialog} handleCloseCallback={handleCloseDialog}/>

        </>
    );
};

export default AboutHighLights3;