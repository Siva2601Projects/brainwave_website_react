import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

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
                                                        <li><a href="courses.html">Courses</a></li>
                                                        <li><a href="about.html">About</a></li>
                                                        <li><a href="#">Blog</a>
                                                            <ul className="submenu">
                                                                <li><a href="blog.html">Blog</a></li>
                                                                <li><a href="blog_details.html">Blog Details</a></li>
                                                                <li><a href="elements.html">Element</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                        
                                                        <li className="button-header margin-left "><a onClick={()=>setCallbackDialog(true)} className="btn">Join</a></li>
                                                        <li className="button-header"><a href="https://crm.brainwavetechz.com/login" className="btn btn3">Log in</a></li>
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
                <Dialog open={openCallbackDialog} fullWidth onClose={handleDialogClose}>
                    <DialogTitle style={{fontSize:'15px'}} >
                        Enter your contact details. We would get back to you asap.
                    </DialogTitle>
                    
                    <DialogContent>
                        <div class="form-contact contact_form">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="25" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="tel" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your mobile number'" placeholder="Enter your mobile number" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{gap:'10px', justifyContent:'end', marginRight:'3px'}}>
                                <div class="form-group mt-3">
                                    <button class="button button-contactForm boxed-btn">Submit Request</button>
                                </div>
                                <div class="form-group mt-3">
                                    <button class="button button-contactForm boxed-btn" onClick={handleDialogClose}>Cancel</button>
                                </div>
                            </div>
                            
                        </div>
                    </DialogContent>
                </Dialog>
            </>
           
    );
};

export default Header;