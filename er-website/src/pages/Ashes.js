import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const AshesDropdown = () => {
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
    // Initialize state to hold list of ashe names
    const [asheNames, setasheNames] = useState([]);
    const [selectedashe, setSelectedashe] = useState(null);
    
    useEffect(() => {
        const fetchasheNames = async () => {
            const ashesQuery = query(collection(db, "Ashes"));
            const ashesSnapshot = await getDocs(ashesQuery);
            console.log("ashe snapshot:", ashesSnapshot);
            const asheNamesList = ashesSnapshot.docs.map(doc => doc.data().name);
            console.log("ashe names list: ", asheNamesList);
            setasheNames(asheNamesList);
        };
          
      
        fetchasheNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedashe(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="ashes-dropdown">
                {selectedashe ? selectedashe : "Select ashes"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {asheNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default AshesDropdown;