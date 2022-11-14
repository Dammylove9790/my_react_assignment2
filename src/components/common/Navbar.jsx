import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id="mainNav">
        <div class="nav">
            <div class="mobileScreen">
                <div class="mobileScreenFlex">
                    <div class="tichs" >
                        <h1>TICHS</h1>
                    </div>
                    <div class="menuSpace">
                        <div class="menuIcon" >
                            <h1>Menu<i class="fas fa-bars fa-1x fa-fw"></i></h1>
                            {/* <!-- <div class="menuLine"></div>
                            <div class="menuLine"></div>
                            <div class="menuLine"></div> --> */}
                        </div>
                        {/* <!-- <div class="menuName" >
                                <h1>Menu<i class="fas fa-bars fa-1x fa-fw"></i></h1>
                        </div>  --> */}
                    </div>
                </div>
            </div>
            

            <ul class="nav1">
                <li><Link to="/">Home</Link></li>
                <li class="li-drop"><Link to="#">Portal 
                    <i class="fa fa-caret-down" aria-hidden="true"></i> 
                    {/* <!-- <img src="oicImages/arrowDown.png" alt=""> --> */}
                </Link>
                    
                    <ul class="nav2">
                        <li class="name"><Link to="/studentdashboard">Student Portal</Link></li>
                        <li><Link to="#">Staff Portal</Link></li>
                    </ul>
                </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="#services">Services</Link></li>
                <li class="li-drop"><Link to="/contact">Contact-Us  
                    <i class="fa fa-caret-down" aria-hidden="true"></i> 
                    {/* <!-- <img src="oicImages/arrowDown.png" alt=""> --> */}
                </Link>
                    
                    <ul class="nav2">
                        <li class="name"><Link to="/about">Our Contact Info</Link></li>
                        <li><Link to="/feedback">Submit a Feedback</Link></li>
                        <li><Link to="/enquiry">Make Enquiry</Link></li>
                        <li><Link to="/about">Our Office</Link></li>
                        <li><Link to="/socials">Socials</Link></li>
                    </ul>
                </li>    
                <li><Link to="/socials">Socials</Link></li>
            </ul>
        </div>
    </div>

  )
}

export default Navbar