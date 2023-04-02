import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './Auth.css'
import icon from '../../assets/icon.jpeg'
import AboutAuth from './AboutAuth';
import { signup, login } from '../../actions/auth'

const Auth = () => {
    const [isSignup, setIsSignup] =useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!isSignup)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log({name, email, password})
        if(!email && !password){
            alert('Enter email and password')
        }
        if(isSignup){
            if(!name){
                alert('Enter a name to continue')
            }
            dispatch(signup({ name, email, password}, navigate))
        }else{
            dispatch(login({email,password}, navigate))
        }
        
    }

    return(
        <section className='auth-section'>
            { isSignup && <AboutAuth />}
              <div className='auth-container-2'>
              { !isSignup && <img src={icon} width="30px" alt ='stack overflow' className='login-logo'/>}
              <form onSubmit={handleSubmit}>
                  {  
                     isSignup && (
                       <label htmlFor='name'>
                         <h4>Display Name</h4>
                         <input type="text" id='name' name='name' onChange={(e) => {setName(e.target.value)}}/>
                    </label>
                )
            }
            <label htmlFor="email">
                <h4>Email</h4>
                <input type="email" name='email' id="email" onChange={(e) => {setEmail(e.target.value)}}/>
            </label>
            <label htmlFor="password">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <h4>Password</h4>
                { !isSignup && <p style={{color:"#007ac6"}}>forget password? </p>}
                </div>
                <input type="password" name='password' id="password" onChange={(e) => {setPassword(e.target.value)}}/>
                { isSignup && <p style={{color:"#666767", fontSize:"13px"}}>
                    Passwod must contain at least eight <br/>
                 charecters,including at least 1 letter and1 <br/>
                 number</p>}
            </label>
            {
                isSignup && (
                    <label htmlFor='check'>
                        <input type="checkbox" id='check'/>
                        <p style={{ fontSize:"13px"}}>
                            Opt-in toreceive occasional <br/>
                         product update, user research inivitations, <br/>
                         company announcements, and digests.</p>
                    </label>
                )
            }
            <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up':'Log in'}</button>
            {
                isSignup && (
                    <p style={{color:"#666767", fontSize:"13px"}}>
                        By clicking "Signup", you aggree to our 
                        <span style={{color:"#007ac6"}}>terms of <br/> service</span>,
                        <span style={{color:"#007ac6"}}>privacy policy</span>
                        and<span style={{color:"#007ac6"}}>coockie policy</span>
                    </p>
                )
            }
          </form>
          <p>
            {isSignup ? 'already have an account?':"don't have an account?"}
            <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup? "Login":"signup"}</button>
          </p>
            </div>
        </section>
    )
}
export default Auth