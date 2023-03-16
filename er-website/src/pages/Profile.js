import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate,Link } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
function Profile(){
    return (
        <div className="dashboard">
        <div className="dashboard__container">
            Profile
            <Link to='/Profile'><button className="dashboard__btn">Load Character</button></Link>
            <Link to='/'><button className="dashboard__btn">Builder</button></Link>
        </div>
        </div>
    );
}
export default Profile;
