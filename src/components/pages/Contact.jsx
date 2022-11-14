import React from 'react'

const iframeStyle= {
  width:"80%",
  height:"450px",
  style:"border:0;",
  allowfullscreen:"",
  loading:"lazy",
  referrerpolicy:"no-referrer-when-downgrade"
}


function Contact() {
  return (
    <div id="rightColumn" class="column1">
      <div id="innerColumn1" class="innerColumn1NoNews">
        <div class="schoolContent">
          <div class="contentHeader">
            <span>Contat Us</span>
          </div>
          <br />
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9398.826351305524!2d4.314783074711914!3d7.924318605132834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037790ac425f1ed%3A0x7ec191b5e759de1d!2sTitilope%20Schools!5e0!3m2!1sen!2sng!4v1655728825117!5m2!1sen!2sng"
            style = {iframeStyle}
          ></iframe>
        </div>
        <br />
        <hr />
        <br />

        <div class="tigs">
          <div class="tigsImageNoNews">
            <div class="tigsContent">
              <h3>Contact Info</h3>
            </div>
            <p>08052134068</p>
            <p>08064020201</p>
          </div>

          <div class="tigsImageNoNews">
            <div class="tigsContent">
              <h3>Office Address</h3>
            </div>
            <p>Along Oko Road, Madina Area, Odo-otun, Alabere,</p>
            <p>Ejigbo,</p>
            <p>Osun State,</p>
            <p>Nigeria.</p>
          </div>

          <div class="tigsImageNoNews">
            <div class="tigsContent">
              <h3>Opening Hours</h3>
            </div>
            <p>Mon: 7:00 am – 4:00 pm</p>
            <p>Tue: 7:00 am – 4:00 pm</p>
            <p>Wed: 7:00 am – 4:00 pm</p>
            <p>Thu: 7:00 am – 4:00 pm</p>
            <p>Fri: 7:00 am – 4:00 pm</p>
            <p>Sat: Closed</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact