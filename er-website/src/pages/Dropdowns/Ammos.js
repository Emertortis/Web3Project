import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const AmmosDropdown = () => {
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
    // Initialize state to hold list of ammo names
    const [ammoNames, setammoNames] = useState([]);
    const [selectedammo, setSelectedammo] = useState(null);
    
    useEffect(() => {
        const fetchammoNames = async () => {
            const ammosQuery = query(collection(db, "Ammo"));
            const ammosSnapshot = await getDocs(ammosQuery);
            console.log("ammo snapshot:", ammosSnapshot);
            const ammoNamesList = ammosSnapshot.docs.map(doc => doc.data().name);
            console.log("ammo names list: ", ammoNamesList);
            setammoNames(ammoNamesList);
        };
          
      
        fetchammoNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedammo(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="ammos-dropdown">
                {selectedammo ? selectedammo : "Select ammos"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {ammoNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default AmmosDropdown;