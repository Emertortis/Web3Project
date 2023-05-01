import React, { useState, useEffect } from "react";
import { db, logout, auth } from "../firebase";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth"; // Import the auth function
import "./ViewUsers.css";

function ViewUsers() {
    // Function that displays user info
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

    // Function to delete user
    const [name, setName] = useState("");

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
            setName("");
        });
    };

    // Function to reset user password
    const resetPassword = async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent successfully");
        } catch (error) {
            console.error(error);
            alert("Error sending password reset email");
        }
    };

    return (
        <div>
            <center>
                <h2>Saved Logins</h2>
                <Link to="/Login">
                <button className="dashboard__btn" onClick={logout}>
                    Logout
                </button>
                </Link>

                <Link to='/'>
                    <button className="dashboard__btn">Builder</button>
                </Link>
                <div>
                    <h2>Delete User</h2>
                    <input
                        className="ViewUsers_deleteText"
                        type="text"
                        placeholder="Enter full user name to delete"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button onClick={deleteUser}>Delete User</button>
                </div>
            </center>
            {users.map((user, index) => (
                <center key={index}>
                    <div className="ViewUsers_display">
                        <h1>Name: {user.name}</h1>
                        <p>Email: {user.email}</p>
                        <button onClick={() => resetPassword(user.email)}>
                            Reset Password
                        </button>
                    </div>
                </center>
            ))}
        </div>
    );
}

export default ViewUsers;
