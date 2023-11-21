import React from 'react'

export const LoginSignup = () => {
  return (
    <div className='container'>
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="image">
          <img src={user_icon} alt="" />
          <input type="text" />
        </div>
        <div className="image">
          <img src={email_icon} alt="" />
          <input type="email" />
        </div>
        <div className="image">
          <img src={password_icon} alt="" />
          <input type="password" />
        </div>
        <div className="forgot-password">forgot Password? <span>click me</span></div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>
        </div>
      </div>

    </div>
  )
}
