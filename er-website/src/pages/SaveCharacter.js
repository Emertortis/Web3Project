import { useState } from 'react';
import handleSave from './webpage'
import {db} from '../firebase';

//Issue to solve: site cant reach this file
//Import issue?
function SaveCharacter(characterName, stats) {
  db.collection('savedCharacters')
    .doc(characterName)
    .set(stats)
    .then(() => {
      console.log('Character saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving character: ', error);});
}

export default SaveCharacter;