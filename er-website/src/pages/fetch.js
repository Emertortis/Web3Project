import React,{useState} from "react";
import firebase from 'firebase/compat/app'
import { getFirestore, collection } from "firebase/firestore"
import 'firebase/compat/firestore';
import { db} from '../firebase';




function Fetch(){

        const [info , setInfo] = useState([]);
        const collectRef = collection(db, "data")
        
        // Start the fetch operation as soon as
        // the page loads
        window.addEventListener('load', () => {
            fetchAll();
          });
     
        // Fetch the required data using the get() method
        
        function fetchAll(e){
            e.preventDefault();
            collectRef.get().then((querySnapshot) => {
                
                // Loop through the data and store
                // it in array to display
                querySnapshot.forEach(element => {
                    var data = element.data();
                    setInfo(arr => [...arr , data]);
                     
                });
                console.log(info)

            })
        }
        return(
            <div>
                <h1>Fetching Data</h1>
                <button onClick={fetchAll}>Fetch all entries</button>
            </div>        
            ) 
}
export default Fetch;