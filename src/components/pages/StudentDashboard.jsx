import React from 'react'

function StudentDashboard() {
  return (
    <div id="rightColumn" class="column1">
        <div class="rightColumnRow1">

        <div class="innerColumn1">
            <div class="contentHeader">
                <span>My Profile</span>
            </div>
            <br />
            
            <div class="studentInfo">
                    <img src="oicImages/mariam.jpg" alt="Student Image" />   
                <br />
                <br />
                <div class="profileStyle">
                    <p>Name: </p>
                    <p>Student ID: </p>
                    <p>Class: </p>
                    <p>Gender: </p>
                </div>
                <div class="profileStyle">
                    <p>ATANDA MARIAM MICHELLE</p>
                    <p>20210530</p>
                    <p>S.S.S 2</p>
                    <p>FEMALE</p>
                </div>
            </div>

            <div class="studentInfo">
                
            </div>

            <div>
                
            </div>

            <div>
                
            </div>

        </div>        

        <div class="innerColumn2">
            <div class="innerColumnNews">
            <h1>Recent News</h1>  
            <hr />
            <marquee direction="up">
                <div class="news">
                <h3>Assingments</h3>
                <p>
                    This is to notify you that you have been given _______ assingment by Mr Oluwaseun Adigun.
                </p>
                </div>

                <div class="news">
                    <h3>Examination Date Updated</h3>
                    <p>
                        This is to notify the entire public that the school is schedule to resume in the next two weeks.
                    </p>
                    </div>

                    <div class="news">
                        <h3>Resumption</h3>
                        <p>
                            This is to notify the entire public that the school is schedule to resume in the next two weeks.
                    </p>
                    </div>

                    <div class="news">
                        <h3>Resumption</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>

            </marquee>

            </div>
        </div>      
        
        </div>        


        <div class="rightColumnRow2">

        </div>
    </div>
  )
}

export default StudentDashboard