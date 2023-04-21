import React, { useEffect, useState } from "react";
import { useAuthState} from "react-firebase-hooks/auth";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  if (user?.uid == "5gNYDnYxK2YWJjee0bR0KxWtPN02") {
    return (
      <div className="dashboard">
         <div className="dashboard__container">
          Logged in as
           <div>{name}</div>
           <div>{user?.email}</div>
           <button className="dashboard__btn" onClick={logout}>
            Logout
           </button>
           <Link to='/Profile'><button className="dashboard__btn">Profile</button></Link>
           <Link to='/'><button className="dashboard__btn">Builder</button></Link>
           <Link to='/'><button className="dashboard__btn">View current users</button></Link>
         </div>
       </div>
    );
    const uid = user.uid;
    // ...
  }
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
         <Link to='/Profile'><button className="dashboard__btn">Profile</button></Link>
         <Link to='/'><button className="dashboard__btn">Builder</button></Link>
       </div>
     </div>
  );

}


export default Dashboard;