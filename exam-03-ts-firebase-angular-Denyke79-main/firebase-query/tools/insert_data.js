import {db} from "../queries/firebase-init.js"
import {addDoc, collection} from "firebase/firestore";

import * as data from "./data.json" assert {type: "json"};


data.default.citizens.forEach(async citizen => {
    const citizenRef = await addDoc(collection(db, 'citizens'), citizen);
    console.log(`Created citizen with ID ${citizenRef.id}`);
});
