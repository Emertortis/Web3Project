import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const ArmorDropdown = () => {
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
    // Initialize state to hold list of armor names
    const [armorNames, setarmorNames] = useState([]);
    const [selectedarmor, setSelectedarmor] = useState(null);
    
    useEffect(() => {
        const fetcharmorNames = async () => {
            const armorsQuery = query(collection(db, "Armor"));
            const armorsSnapshot = await getDocs(armorsQuery);
            console.log("armor snapshot:", armorsSnapshot);
            const armorNamesList = armorsSnapshot.docs.map(doc => doc.data().name);
            console.log("armor names list: ", armorNamesList);
            setarmorNames(armorNamesList);
        };
          
      
        fetcharmorNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedarmor(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="armors-dropdown">
                {selectedarmor ? selectedarmor : "Select armors"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {armorNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default ArmorDropdown;