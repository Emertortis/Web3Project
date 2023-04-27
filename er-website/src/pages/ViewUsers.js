import React, { useState, useEffect } from "react";
import { db, logout } from "../firebase";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import "./ViewUsers.css";

function ViewUsers() {

    //function that displays user info
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            const users = [];
            querySnapshot.forEach((doc) => {
                const user = doc.data();
                users.push(user);
            });
            setUsers(users);
        };
        fetchUsers();
    }, []);

    //function to delete user
    const [name, setname] = useState("");

    const deleteUser = async () => {
        const q = query(collection(db, "users"), where("name", "==", name));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            alert("User does not exist");
            return;
        }
        querySnapshot.forEach((doc) => {
            deleteDoc(doc.ref);
            alert("User deleted successfully");
            setname("");
        });
    };

    return (
        <div>
            <center>
                <h2>Saved Logins</h2>
                <button className="dashboard__btn" onClick={logout}>
                    Logout
                </button>
                <Link to='/'><button className="dashboard__btn">Builder</button></Link>
                <div>


                    <h2>Delete User</h2>
                    <input className="ViewUsers_deleteText"
                        type="text"
                        placeholder="Enter full user name to delete"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                    <button onClick={deleteUser}>Delete User</button>
                </div>


            </center>
            {users.map((user, index) => (
                <center>
                    <div className="ViewUsers_display" key={index}>
                        <h1>Name: {user.name}</h1>
                        <p>Email: {user.email}</p>
                        <button>
                            <div>
                                <Link to="/reset">Reset Password</Link>
                            </div>                        </button>
                    </div>
                </center>

            ))}
        </div>
    );
}

export default ViewUsers;