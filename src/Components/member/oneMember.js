import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { storage } from "../../firebase"; 
import { v4 } from "uuid";
import "./oneMember.css";

export const Onemember = () => {
  const { pathname } = useLocation();
  let myparam = pathname.slice(9);
  const [imageUpload, setImageUpload] = useState(null);
  const [formData, setFormData] = useState({});

  const [member, setMember] = useState({});
  useEffect(() => {
    (async () => {
      const { data: member } = await axios.get(`/api/members/${myparam}`);
      setMember(member);
    })();
  }, [myparam]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  
  const onChange = (event) => {
    setImageUpload(event.target.files[0]);
  };

  // need to upload image to firebase and get url to store in formData
  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `Hall7MembersImages/${imageUpload.name + v4()}`);
    let snapshot = await uploadBytes(imageRef, imageUpload);
    let url = await getDownloadURL(snapshot.ref);
    console.log("url=>", url)
    setFormData({...formData, image: url});
    alert("image uploaded, you can click on Updated Member Info");
  }
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data: member } = await axios.put(
      `/api/members/${myparam}`,
      formData
    );
    setMember(member);
    setFormData({});
  };

  const handleDelete = async () => {
    await axios.delete(`/api/members/${myparam}`);
    setMember({});
  };
  return (
    <div className="oneMemberComp">
      <form>
        <label htmlFor="name"> Member Name</label>
        <input name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="phone"> Member Phone</label>
        <input name="phone" value={formData.phone} onChange={handleChange} />
      </form>
      <label htmlFor="image" style={{margin: "10px" }}>Member Photo</label>
      <input type="file" name="image" onChange={onChange} />
        <button onClick={uploadFile}> Upload Image</button>
        <button onClick={handleSubmit} style={{ margin: "20px" }}>
          {" "}
          Update Member Info{" "}
        </button>
      

      <h3 style={{ borderTop: "solid", width: "500px" }}>{member.name}</h3>
      <img style={{ width: "150px", margin: "5px" }} src={member.image} alt="" />

      <button onClick={handleDelete}>Delete this member</button>
    </div>
  );
};
