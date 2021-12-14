import React from "react";

const dummyData = [{id: 1, name: "Sarah", imageUrl: "Photo-Coming"}, 
                    {id: 2, name: "James", imageUrl: "Photo-Coming"}, 
                    {id: 3, name: "John", imageUrl: "Photo-Coming"}]


const Members = () => {
    return (
      <div >
          <h3>Number of members attended the meeting on Sunday: {dummyData.length}</h3>

            {dummyData.map((member) => (
            <li key = {member.id}>{member.name}</li>) 
            )}
           
      </div>
    );
  };

export default Members;