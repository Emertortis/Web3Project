import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

const WeaponsDropdown = () => {
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
    // Initialize state to hold list of weapon names
    const [weaponNames, setWeaponNames] = useState([]);
    const [selectedWeapon, setSelectedWeapon] = useState(null);
    
    useEffect(() => {
        const fetchWeaponNames = async () => {
            const weaponsQuery = query(collection(db, "Weapons"));
            const weaponsSnapshot = await getDocs(weaponsQuery);
            console.log("Weapon snapshot:", weaponsSnapshot);
            const weaponNamesList = weaponsSnapshot.docs.map(doc => doc.data().name);
            console.log("Weapon names list: ", weaponNamesList);
            setWeaponNames(weaponNamesList);
        };
          
      
        fetchWeaponNames();
    }, []);
  
    const handleSelection = (eventKey) => {
        console.log("Selected item:", eventKey);
        setSelectedWeapon(eventKey);
    }
  
    return (
        <Dropdown onSelect={handleSelection} multiple>
            <Dropdown.Toggle variant="primary" id="weapons-dropdown">
                {selectedWeapon ? selectedWeapon : "Select weapons"}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ maxHeight: "300px", overflowY: "scroll" }}>
                {weaponNames.map(name => (
                    <Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
  
export default WeaponsDropdown;


