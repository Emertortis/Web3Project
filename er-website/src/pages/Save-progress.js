//function that saves progress
import React, {useState, useEffect} from "react";
import { getAuth, GoogleAuthProvider } from "../firebase";
import { getFirestore, query, addDoc } from "firebase/firestore";

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) {
        return savedValue;
    }
    else {
        return initialValue;
    }
}

//Getting Data

// getItemStorage = async (key) => {
//     try {
//         const value = await AsyncStorage.getItem(key);
//         if(value !== null) {
//             return value
//         } else {
//             console.log("Read the data error");
//         }
//     }
//         catch (error) {
//             console.log("Read the data error");
//         }
    
//}

export default function useLocalStorage(key, initialValue) {
    let [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
    

    return [value, setValue]; 

}

