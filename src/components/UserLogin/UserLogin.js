import React from 'react'
import './UserLogin.css'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function UserLogin() {
  const {
  register,
  handleSubmit,
  formState: { errors },
  reset
} = useForm();

const navigate=useNavigate()
const SubmitForm = (data) => {
  const payload = {
    email: data.email,
    password: data.password
  };

  axios.post('https://reqres.in/api/login', payload)
    .then((res) => {
      console.log("Login successful:", res.data);
      toast.success("Login Successful ✅", {
        position: "top-right"
      });
      localStorage.setItem("token", res.data.token);
      navigate('/all-users')
    })
    .catch((err) => {
      console.error(" Login failed:", err.response?.data || err.message);
      toast.error(`Login Failed ❌`, {
        position: "top-right"
      });
      reset();
      navigate('/');
    });
};
    

  return (
    <div className='userloginbody'>
       <div className="usercontainer">  
       <h2 className="userloginheading">Login</h2>
          <form autoComplete="off" onSubmit={handleSubmit(SubmitForm)}>
             <div className="formcontrol">
               <div>
                 <label htmlFor="useremail"><b>Email</b></label>
                 <input type="email"  className="form-control" id="useremail" required {...register("email")}/>
                 {errors.email && <span className='text-danger'>{errors.email.message}</span>}
               </div>
               <div className="form-group">
                 <label htmlFor="userpassword"><b>Password</b></label>
                 <input type="password" className="form-control" id="userpassword" required {...register("password")}/>
                 {errors.password && <span className='text-danger'>{errors.password.message}</span>}
               </div>
              </div>
              <div id="liveAlertPlaceholder"></div>
                <div className="g-recaptcha" data-sitekey="6LfoGssmAAAAAJOL8-eANYwLOkiRTyQ1RZj7oJEu"></div> 
                 <button type="submit" className="btn btn-danger my-2"  id="btn11">Login</button>
           </form>
           <ToastContainer />
        </div>
      </div>
  )
}

export default UserLogin;
