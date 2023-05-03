import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const SpiritDropdown = () => {
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
    // Initialize state to hold list of spirit names
    const [spiritNames, setspiritNames] = useState([]);
    const [selectedspirit, setSelectedspirit] = useState(null);
    
    useEffect(() => {
        const fetchspiritNames = async () => {
            const spiritsQuery = query(collection(db, "Spirits"));
            const spiritsSnapshot = await getDocs(spiritsQuery);
            console.log("spirit snapshot:", spiritsSnapshot);
            const spiritNamesList = spiritsSnapshot.docs.map(doc => doc.data().name);
            console.log("spirit names list: ", spiritNamesList);
            setspiritNames(spiritNamesList);
        };
          
      
        fetchspiritNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedspirit(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="spirits-dropdown">
                {selectedspirit ? selectedspirit : "Select spirits"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {spiritNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default SpiritDropdown;