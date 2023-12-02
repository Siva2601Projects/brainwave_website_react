import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import CallBackDialog from "./Components/callback_dialog";

const Header=()=>{

    const [openCallbackDialog, setCallbackDialog] = useState(false);
    const handleDialogClose=()=>{
        setCallbackDialog(false);
     };

    return(

            <>
                <header>
                <div className="header-area header-transparent">
                    <div className="main-header ">
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10">
                                        <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                            
                                            <div className="main-menu d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">                                                                                          
                                                        <li className="active" ><a href="index.html">Home</a></li>
                                                        <li><a href="/">Courses</a></li>
                                                        <li><a href="/">About</a></li>
                                                        <li><a href="/">Blog</a>
                                                            <ul className="submenu">
                                                                <li><a href="/">Blog</a></li>
                                                                <li><a href="/">Blog Details</a></li>
                                                                <li><a href="/">Element</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="/">Contact</a></li>
                                                        
                                                        <li className="button-header margin-left "><a onClick={()=>setCallbackDialog(true)} className="btn">Join</a></li>
                                                        <li className="button-header"><a href="/" className="btn btn3">Log in</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </header>
                
                <CallBackDialog dialogOpen={openCallbackDialog} handleCloseCallback={handleDialogClose}/>
            </>
           
    );
};

export default Header;