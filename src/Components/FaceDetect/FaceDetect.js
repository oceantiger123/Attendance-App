import React from "react";
import "./FaceDetect.css"
//import AttendentCalendar from "../calendar";

const FaceDetect = ({ imageUrl, box }) => {
    return (
    //This div is the container that is holding our fetch image 
   //and the face detect box
      <div className="center ma">
        <div className="absolute mt2">
      {/* // we set our image SRC to the url of the fetch image */}
          <img id="inputimage" alt="" src={imageUrl} 
           width="500px" heigh="auto" />
            <div className="bounding-box"
             style={{
                left: box.leftCol,
               top: box.topRow,
               right: box.rightCol,
               bottom: box.bottomRow,
             }}
            ></div>
        </div>
              {/* <h3>Hall7 Member Attendent Calendar</h3>
              <AttendentCalendar /> */}
      </div>
    );
  };

export default FaceDetect;