import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
function Sign() {
  const [form, setForm] = useState({ fullname: "", email: "", password: "", repassword: "" })
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  let history = useHistory();
  function handleClick() {
    history.push("/login");
  }

  const onSubmit = ((e) => {
    e.preventDefault()
    console.log(form)
    if (form.fullname === "") {
      toast.error("Full name cannot be left blank! ")
      return false
    } if (form.email === "") {
      toast.error("Email cannot be left blank! ")
      return false
    } if (form.password === "") {
      toast.error("Password cannot be left blank! ")
      return false
    } if (form.repassword === "") {
      toast.error("Password cannot be left blank! ")
      return false
    } if (form.password.length < 8) {
      toast.error("Minimum number of characters should be 8!")
      return false
    } if (form.repassword.length < 8) {
      toast.error("Minimum number of characters should be 8!")
      return false
    } if (form.password !== form.repassword) {
      toast.error("Passwords do not match!")
      return false
    } if (!form.email.includes("@")) {
      toast.error("Must contain valid email!")
      return false
    } else {
      toast.success("Registration Successful")
      handleClick()

    }
  })
  return (
    <div className='divformp'>
      <form className='signupform' onSubmit={onSubmit}>
        <h1 className='signh1'>Sign Up</h1>
        <ToastContainer />
        <input type="text" name='fullname' onChange={onChange} placeholder="Full Name" onSubmit={onSubmit} />
        <input type="text" name='email' onChange={onChange} placeholder="Email" onSubmit={onSubmit} />
        <input type="password" name='password' onChange={onChange} placeholder="Password" onSubmit={onSubmit} />
        <input type="password" name='repassword' onChange={onChange} placeholder="Repassword" onSubmit={onSubmit} />
        <button>Sign Up</button>
      </form>
      <div>
        <p className='signp'>East Asian cuisine includes Chinese, Japanese, Korean, Mongolian, Taiwanese, and Tibetan food. Considering this is the most populated region of the world, it has many regional cuisines (especially in China). Examples of staple foods include rice, noodles, mung beans, soybeans, seafood (Japan has the highest per capita consumption of seafood), mutton (Mongolia), bok choy (Chinese cabbage), and tea.</p>
        <p className='signp2'>North Asian cuisine is often synonymous with Russian cuisine, due to all of Northern Asia being a part of the Russian Federation. However, some cultures or areas of Siberia have in-depth cuisine, such as the Yakuts (or Sakha) and Yamal cuisine. Buryats also have their own cuisine, although it is very similar to that of the related Mongolians.</p>
      </div>
    </div>
  )
}

export default Sign