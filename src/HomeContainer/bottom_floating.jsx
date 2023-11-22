import { useEffect } from "react";
import $ from 'jquery';

const BottomFloating=()=>{


    useEffect(()=>{
        $('#back-top a').on("click", function () {
            $('body,html').animate({
              scrollTop: 0
            }, 800);
            return false;
          });
    }, []);

    return(
        <>
            <div id="back-top" >
                <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
            </div>
        </>
    );
};

export default BottomFloating;