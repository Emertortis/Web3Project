import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const TalismansDropdown = () => {
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
    // Initialize state to hold list of talisman names
    const [talismanNames, settalismanNames] = useState([]);
    const [selectedtalisman, setSelectedtalisman] = useState(null);
    
    useEffect(() => {
        const fetchtalismanNames = async () => {
            const talismansQuery = query(collection(db, "Talismans"));
            const talismansSnapshot = await getDocs(talismansQuery);
            console.log("talisman snapshot:", talismansSnapshot);
            const talismanNamesList = talismansSnapshot.docs.map(doc => doc.data().name);
            console.log("talisman names list: ", talismanNamesList);
            settalismanNames(talismanNamesList);
        };
          
      
        fetchtalismanNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedtalisman(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="talismans-dropdown">
                {selectedtalisman ? selectedtalisman : "Select talismans"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {talismanNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default TalismansDropdown;