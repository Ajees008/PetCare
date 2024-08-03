import React from 'react'
import '../Styles/LogSig.css'
import { Link } from 'react-router-dom'

export default function LogSig() {
  
     return (
    <>
    <div>
        <center>
          
        
     <section class="container forms">
            <div class="form login">
                <div class="form-content">
                    <header>Login</header>
                    <form action="#">
                        <div className="field input-field">
                            <input type="email" placeholder="Email :" className="input"></input>
                        </div>

                        <div className="field input-field">
                            <input type="password" id='myInput' placeholder="Password :" className="password"></input>
   
                        </div>

                        <div class="form-link">
                            <a href="#" class="forgot-pass">Forgot password?</a>
                        </div>

                        <div className="field button-field">
                           <Link to={'/'}><button>Login</button></Link>
                        </div>
                    </form>
                    
                </div>
                
                
               
            </div>
        </section>
        </center>
        </div>
    </>
  )
}
