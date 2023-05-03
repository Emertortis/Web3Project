import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { initializeApp } from "firebase/app";
import { getFirestore, query, getDocs, collection, where } from "firebase/firestore";


function Runes(props) {
    // gives fire base access info
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

    const [runes, setRunes] = useState([]);

    useEffect(() => {
        const fetchRunes = async () => {
            const runesCollection = query(collection(db, "Runes"), where("Level", "==", props.level));
            const runesSnapshot = await getDocs(runesCollection);
            const runesData = runesSnapshot.docs.map((doc) => doc.data());
            setRunes(runesData);
        };
        fetchRunes();
    }, [db, props.level]);

    return (
        <ListGroup horizontal>
            <ListGroup.Item>Runes</ListGroup.Item>
            <ListGroup.Item>
                Total Spent
                <select>
                    {runes.map((rune) => (
                        <option key={rune.Level}>{rune.TotalSpent}</option>
                    ))}
                </select>
            </ListGroup.Item>
            <ListGroup.Item>
                Required For next Level
                <select>
                    {runes.map((rune) => (
                        <option key={rune.Level}>{rune.UpgradeCost}</option>
                    ))}
                </select>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Runes;