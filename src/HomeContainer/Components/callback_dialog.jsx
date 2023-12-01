import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";

const CallBackDialog = ({dialogOpen, handleCloseCallback})=>{

    const [openCallbackDialog, setCallbackDialog] = useState(dialogOpen);
    const handleDialogClose=()=>{
        setCallbackDialog(false);
        if (handleCloseCallback && typeof handleCloseCallback === 'function') {
            handleCloseCallback(); // Invoke the callback function provided by the parent
        }
     };


     useEffect(()=>{
        console.log('here');
        setCallbackDialog(dialogOpen);
     }, [dialogOpen] );

    return(
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
    );
};

export default CallBackDialog;