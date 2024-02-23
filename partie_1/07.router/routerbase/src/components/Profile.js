import React from 'react';
import { useParams } from "react-router-dom";


const Profile = () => {

const {username } =useParams();

    return (
        <div>

      <h1>{username} </h1>
      <p>Infromations sur username {username}</p>
       
  
    </div>
    );
}

export default Profile;
