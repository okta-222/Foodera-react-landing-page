import React from 'react'

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="content">
          <h3 className="title">
            hurry up! subscribe our newsletter and get get 25% off
          </h3>
          <p>
            Limited time offer for this month. No credit card required.
          </p>
          <form>
            <input type="email" name="email" id="emailInput" placeholder="email address here" />
            <button className="btn" type="submit">subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact