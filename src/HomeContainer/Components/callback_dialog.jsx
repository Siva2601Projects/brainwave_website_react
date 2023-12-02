import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { GET_CALLBACK_REFERENCE } from "../../AppConstants";
import { toast } from "react-toastify";
import 'firebase/database';
import { getDatabase, ref, set } from "firebase/database";

const CallBackDialog = ({dialogOpen, handleCloseCallback})=>{

    
    const db = getDatabase();

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

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


     const handleSubmit = ()=>{
        
        console.log('submit clicked');

        if(mobile.trim() === '' && email.trim() === ''){
            handleDialogClose();
            return;
        }else{

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                // Invalid email format, handle error or return
                return;
            }

            const requestID = new Date().getTime();
            const formData = {
                requestID:requestID,
                name:name,
                email: email,
                mobile: mobile,
                subject: subject,
                message: message
            }
            console.log('reached here');
            const loadingToast = toast('Processing request...',{
                type: 'info',
                isLoading: true,
            });

            const callbackRef = ref(db, GET_CALLBACK_REFERENCE + '/' + requestID);
            set(callbackRef, formData)
                .then(()=>{
                    toast.dismiss(loadingToast);
                    toast('Request submitted successfully. You would get a call from us soon. Thank You!',{
                        type:'success',
                        autoClose: 3000,
                    });
                    handleDialogClose();
                })
                .catch((ex)=>{
                    console.log(ex);
                    toast.dismiss(loadingToast);
                    toast('Some error occured', {
                        type: 'error',
                        autoClose: 2000
                    })
                });

        }
     };

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
                                        <textarea onChange={(e)=>{setMessage(e.target.value)}} class="form-control w-100" name="message" id="message" cols="25" rows="9" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'" placeholder=" Enter Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input onChange={(e)=>{setName(e.target.value)}} class="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input onChange={(e)=>{setMobile(e.target.value)}} class="form-control valid" name="name" id="name" type="tel" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your mobile number'" placeholder="Enter your mobile number" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input onChange={(e)=>{setEmail(e.target.value)}} class="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input onChange={(e)=>{setSubject(e.target.value)}} class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Enter Subject" />
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{gap:'10px', justifyContent:'end', marginRight:'3px'}}>
                                <div class="form-group mt-3">
                                    <button class="button button-contactForm boxed-btn" onClick={()=>{handleSubmit()}}>Submit Request</button>
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