import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const ShieldsDropdown = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBPeEGwDcsXhxC3h55K2NxghPeUSh3kcNM",
        authDomain: "web-3-73f3e.firebaseapp.com",
        projectId: "web-3-73f3e",
        storageBucket: "web-3-73f3e.appspot.com",
        messagingSenderId: "94315058879",
        appId: "1:94315058879:web:efe7f2477b5340c6bcd80a",
        measurementId: "G-RHHXHELVHQ"
    };
    // activates firestore access
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    // Initialize state to hold list of shield names
    const [shieldNames, setshieldNames] = useState([]);
    const [selectedshield, setSelectedshield] = useState(null);
    
    useEffect(() => {
        const fetchshieldNames = async () => {
            const shieldsQuery = query(collection(db, "Shields"));
            const shieldsSnapshot = await getDocs(shieldsQuery);
            console.log("shield snapshot:", shieldsSnapshot);
            const shieldNamesList = shieldsSnapshot.docs.map(doc => doc.data().name);
            console.log("shield names list: ", shieldNamesList);
            setshieldNames(shieldNamesList);
        };
          
      
        fetchshieldNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedshield(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="shields-dropdown">
                {selectedshield ? selectedshield : "Select shields"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {shieldNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default ShieldsDropdown;