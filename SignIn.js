import React, { Component } from 'react'
import './App.css'

class SignIn extends Component{
    
    render(){
        return(
            <div class='page'>
                <div class='logo'><img src={require('./Images/logo.png')} alt='fb img' /></div>
                <div class='card1'>
                    <div class='heading'>SIGN UP</div>
                    <div style={{textAlign:'center',width:'100%',fontSize:'200%',color:'rgba(100, 100, 100)'}}>Create your account</div>
                    <div style={{textAlign:'center',width:'100%',fontSize:'100%',marginBottom:'4%',marginTop:'3%',color:'rgba(128, 128, 128)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    <div style={{display:'flex',justifyContent:'center',marginRight:'10%'}}>
                        <div class='google'>
                            <img src={require('./Images/google-icon.svg')} alt='fb img'/>
                            <p>Sign up with Google</p>
                        </div>
                        <div class='fb' >
                            <img src={require('./Images/facebook-logo.png')} alt='fb img'/><p>Sign up with Facebook</p>
                        </div>
                    </div>
                    <div class='divider'><span>or</span></div>
                    <form>
                        <input type='text' placeholder='First Name' required='required'/>
                        <input type='text' placeholder='First Name' required='required'/>
                        <input type='email' placeholder='Email Address' required='required'/>
                        <input type='password' placeholder='Password' required='required'/>
                        <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                        <div>By clicking Sign Up, you agree to our <a href='#'>Terms of Use</a>and our<a href='#'>Privacy Policy</a>.</div>
                        <input type='submit' value='SIGN UP'/>
                    </form>
                </div>
            </div>
        );
    }
} 

export default SignIn;