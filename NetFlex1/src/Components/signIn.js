
import React from 'react'

function Header() {
  const signIn =()=>{
    <form action="post">
  <h1>Sign In</h1>
  <input type="email" placeholder="Email or mobile number"><br/><br/>
  <input type="password" placeholder="Password"><br/>
  <button>Sign In</button><br/>
  <h3>OR</h3><br/>
  <BUtton>Use a Sign-in Code</BUtton><br/>
  <a href="#">Forgot password?</a>
  <img src="#" alt=""/> Remember me <br/>
  New to Netflix? Sign up now. <br>
  <p>This Page is protected by Google reCAPTCHA to <br>
    ensure you're not bot. <a href="#">Learn more.</a>

  </p>
</form>
    return 
   
  }
  return (
    <div className='Header'>
      <img src="#" alt="" />
      <nav className='nav'>
        <BUtton>English <img src="#" alt="" /></BUtton>
        <BUtton onclick={signIn}>Sign In</BUtton>
      </nav>
    </div>
  )
}