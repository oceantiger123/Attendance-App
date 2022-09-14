import {useEffect, useState} from "react";
import "./App.css";
import AttendentCalendar from "./Components/calendar";
import Members from "./Components/member/member";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SingleDateAttendance from "./Components/singleDateAttended/attendance";
import { Onemember } from "./Components/member/oneMember";
import Login from "./Components/Login";
import axios from "axios";
import Updatepassword from "./Components/updatePassword/updatepassword";

// const app = new Clarifai.App({ apiKey: "bbcb6e3cd926404da5e1207117fbec31" });

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       input: "",
//       imageUrl: "",
//       box: {},
//     };
//   }
//   //This function calculates the FaceDetect location of the image
//   calculateFaceLocation = (data) => {
//     const clarifaiFace =
//       data.outputs[0].data.regions[0].region_info.bounding_box;
//       console.log('face', data)
//     const image = document.getElementById("inputimage");
//     const width = Number(image.width);
//     const height = Number(image.height);
//     return {
//       leftCol: clarifaiFace.left_col * width,
//       topRow: clarifaiFace.top_row * height,
//       rightCol: width - clarifaiFace.right_col * width,
//       bottomRow: height - clarifaiFace.bottom_row * height,
//     };
//   };
//   //To show the face-detect box on the state values:
//   displayFaceBox = (box) => {
//     this.setState({ box: box });
//   };

//   onInputChange = (event) => {
//     this.setState({ input: event.target.value });
//   };

//   // execute a function when submitting with onSubmit
//   onSubmit = () => {
//     this.setState({ imageUrl: this.state.input });
//     app.models
//       //Using Face_Detect_model from Clarifai
//       .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
//       .then((response) =>
//        this.displayFaceBox(this.calculateFaceLocation(response))

//       )
//       .catch((err) => console.log(err));
//   };
//   render() {
//     return (
//       <div className="App">
//         <h2>Hall 7 Attendence</h2>
//         {/* <h3>place an image url in the box </h3>
//         <ImageSearchForm
//           onInputChange={this.onInputChange}
//           onSubmit={this.onSubmit}
//         />
//         <FaceDetect box={this.state.box} imageUrl={this.state.imageUrl} /> */}
//         {/* <h3>Hall7 Member Attendent Calendar</h3> */}
//         <Navbar />
//         <AttendentCalendar />
//       </div>
//     );
//   }
// }

const App = () => {
  const token = window.localStorage.getItem('token');
  //const registerName = 'admin';
  const [auth, setAuth] = useState({});
  useEffect(()=>{
    (async()=>{
      try{
        const {data: user} = await axios.get('/auth/me', {
          headers: {
            authorization: token
          }
        })
        setAuth(user)
      }catch(err){
      }
    })()
  },[token])

  return (
    <div>
      {auth.id ? (
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/members" element={<Members />} />
            <Route exact path="/members/:id" element={<Onemember />} />
            <Route exact path="/dates/:id" element={<SingleDateAttendance />} />
            <Route exact path="/calendar" element={<AttendentCalendar />} />
            <Route exact path="/updatepassword" element={<Updatepassword />} />
          </Routes>
        </div>
      ) : (
        <Login auth={auth} />
        )}
    </div>
  );
};

export default App;
