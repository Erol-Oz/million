import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  
    const [form,setForm]=useState({email:"",password:""})
    const onChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit=((e)=>{
      e.preventDefault()
      console.log(form)
      
       if (form.email === "") {
        toast.error("Email cannot be left blank! ")
        return false
      } if (form.password === "") {
        toast.error("Password cannot be left blank! ")
        return false
      } 
    })

  return (
    <div className='loginformp'>
      <form className='signupform' onSubmit={onSubmit}>
      <h1 className='signh1'>Login</h1>
      <ToastContainer/>
      <input type="text" name='email' onChange={onChange} placeholder="Email" onSubmit={onSubmit}/>
      <input type="password" name='password' onChange={onChange} placeholder="Password" onSubmit={onSubmit}/>
      <button>Login</button>
    </form>
    <div>
      <p className='loginp'>Southeast Asian cuisine includes a strong emphasis on lightly prepared dishes with a strong aromatic component that features such flavors as citrus and herbs such as lime, coriander/cilantro and basil. Ingredients in the region contrast with the ones in the East Asian cuisines, substituting fish sauces for sauce and the inclusion of ingredients such as galangal, tamarind and lemongrass. Cooking methods include a balance of stir-frying, boiling and steaming.</p>
    </div>
    </div>
  )
}

export default Login