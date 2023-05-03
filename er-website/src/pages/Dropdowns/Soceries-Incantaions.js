import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const SorceriesIncantationsDropdown = () => {
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
    // Initialize state to hold list of sorceriesincantations names
    const [sorceriesincantationsNames, setsorceriesincantationsNames] = useState([]);
    const [selectedsorceriesincantations, setSelectedsorceriesincantations] = useState(null);
    
    useEffect(() => {
        const fetchsorceriesincantationsNames = async () => {
            const sorceriesincantationssQuery = query(collection(db, "Sorceries-Incantations"));
            const sorceriesincantationssSnapshot = await getDocs(sorceriesincantationssQuery);
            console.log("sorceriesincantations snapshot:", sorceriesincantationssSnapshot);
            const sorceriesincantationsNamesList = sorceriesincantationssSnapshot.docs.map(doc => doc.data().name);
            console.log("sorceriesincantations names list: ", sorceriesincantationsNamesList);
            setsorceriesincantationsNames(sorceriesincantationsNamesList);
        };
          
      
        fetchsorceriesincantationsNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedsorceriesincantations(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="sorceriesincantationss-dropdown">
                {selectedsorceriesincantations ? selectedsorceriesincantations : "Select sorceriesincantationss"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {sorceriesincantationsNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default SorceriesIncantationsDropdown;