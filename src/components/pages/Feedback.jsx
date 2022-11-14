import React from "react";


const iframeStyle= {
  width:"80%",
  height:"1200px",
  border:"0px",
  marginheight:"0",
  marginwidth:"0",
}


function Feedback() {
  return (
    <div id="rightColumn" class="column1">
      <div id="innerColumn1" class="innerColumn1NoNews">
        <div class="schoolContent">
          <div class="contentHeader">
            <span>Submit a Feedback</span>
          </div>
          <br />
          <br />
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdkvIuH97nhL87UnlY2NG2bTXpyOSMrVefH_dQFgjOXdefy8g/viewform?embedded=true"
            style = {iframeStyle}
          >
            Loading…
          </iframe>
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
  );
}

export default Feedback;
