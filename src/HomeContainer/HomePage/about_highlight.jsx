import { useEffect } from "react";

const AboutHighLights=()=>{

    const initVideoPlayer = false;

    useEffect(()=>{
        console.log('fluid');
        const script = document.createElement('script');
        script.src = 'https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js';
        script.async = true;

        document.body.appendChild(script);

        script.onload = () => {
            const options = {
                layoutControls: {
                    controlBar: {
                        autoHideTimeout: 3,
                        animated: true,
                        autoHide: true,
                    },
                    htmlOnPauseBlock: {
                        html: null,
                        height: null,
                        width: null,
                    },
                    autoPlay: true,
                    mute: true,
                    allowTheatre: true,
                    playPauseAnimation: false,
                    playbackRateEnabled: false,
                    allowDownload: false,
                    playButtonShowing: false,
                    fillToContainer: false,
                    posterImage: '',
                },
                vastOptions: {
                    adList: [],
                    adCTAText: false,
                    adCTATextPosition: '',
                },
            };

            const videoElement = document.createElement('video');
            videoElement.id = 'video-id';
            videoElement.className = 'fluid-player-default';

            const sourceElement = document.createElement('source');
            sourceElement.src = 'assets/img/about.mp4';
            sourceElement.type = 'video/mp4';

            videoElement.appendChild(sourceElement);

            document.getElementById('video-container').appendChild(videoElement);

            window.fluidPlayer('video-id', options);
        };

        return () => {
            // Cleanup script
            document.body.removeChild(script);
        };
    }, []);

    return(
        <div>
            <section className="about-area1 fix pt-10">
                <div className="support-wrapper align-items-center">
                    <div className="left-content1">
                        <div className="about-icon">
                            <img src="assets/img/icon/about.svg" alt="" />
                        </div>
                        
                        <div className="section-tittle section-tittle2 mb-55">
                            <div className="front-text">
                                <h2 className="">Learn new skills with top industrial experts</h2>
                                <p>Immerse in expert-led learning, gaining from industry stalwarts' wisdom to elevate your skills, powered by real-world insights for impactful career growth.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Gain from seasoned industry professionals known for their expertise, offering unparalleled insights and guidance.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Acquire practical knowledge that directly applies to professional scenarios, enhancing your capabilities for immediate use.</p>
                            </div>
                        </div>

                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Elevate your career prospects with valuable skills and insights, positioning yourself ahead in a competitive landscape.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content1">
                        
                        <div className="right-img">
                            {/*<img src="assets/img/about.mp4" alt="" />*/}

                            <div id="video-container1" />

                            <div className="video-icon" >
                                <a className="popup-video btn-icon" href="#"><i className="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default AboutHighLights;