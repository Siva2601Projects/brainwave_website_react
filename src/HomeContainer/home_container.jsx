import AboutHighLights from "./HomePage/about_highlight";
import AboutHighLights3 from "./HomePage/about_highlight_3";
import AboutHighLights2 from "./HomePage/about_hightlight_2";
import ApplyScripts from "./HomePage/apply_scripts";
import FeaturedCourses from "./HomePage/featured_course";
import Placements from "./HomePage/placements";
import Services from "./HomePage/services";
import TopSections from "./HomePage/top_sections";
import BottomFloating from "./bottom_floating";
import Footer from "./footer";
import Header from "./header";
import MainContainer from "./main_container";
import PreLoader from "./preloader";

const HomeContainer=()=>{

    return(
       <>
           <PreLoader /> 
            <Header />
            <MainContainer />
            <Services />
            <FeaturedCourses />
            <AboutHighLights />
            <TopSections />
            <AboutHighLights2/>
            <Placements />
            <AboutHighLights3 />
            <Footer />

            <BottomFloating />


       </>
    );

};

export default HomeContainer;