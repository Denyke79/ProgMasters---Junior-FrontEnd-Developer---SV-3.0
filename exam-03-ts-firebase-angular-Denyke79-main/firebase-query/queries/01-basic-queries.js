import {db} from "./firebase-init.js";
import { collection, getDocs, query, where }  from "firebase/firestore";


//FELADATOK
//1. Írj egy lekérdezést, amivel megkapod az összes nő nemű citizen-t!
// Konzolra logold a visszakapott dokumentumot számát!

//2. Írj egy lekérdezést, amivel megkapod azokat a citizeneket, akiknek az app verziója (app_version) "1" vagy nagyobb és "2" vagy kisebb.
// Konzolra a citizen app verzióját és email címét írd ki!



async function getCitizensByGender() {
    const q = query(collection(db, "citizens"), where("gender", "==", "Female"));

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs.length);        
    }


async function getCitizensByIpAddress(){
    const q = query(collection(db, "citizens"), where("app_version", ">=", "1"), where("app_version", "<=", "2"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(citizen => {
        const citizenData = citizen.data();                 
        console.log(`data: ${citizenData.app_version}, ${citizenData.email}`);
    })
}


(async () => {
    // call functions here
    // getCitizensByGender();
    // getCitizensByIpAddress();
})();
