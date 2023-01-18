import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore} from "firebase-admin/firestore";
import {service_account } from "./secrets.js"

initializeApp({credential: cert(service_account)});

const db = getFirestore();


// const song = {
//     name: "Hello",
//     style: "Pop",
//     year: 2000,
//     singer: "Leonel Richie",
//     language: "EN"
// }

// db.collection()
//     .add(song)
//     .then (doc =>console.log ("Song has been added ", doc.id))
//     .catch (console.error);


// db.collection("music").get().then(
//     collection => {
//         const docs = collection.docs.map(
//             doc => {
//                 let item = doc.data();
//                 item.id = doc.id;
//                 return item;
//             }
//         );
//         console.table(docs);
//     }
// )
// .catch (console.error)

db.collection("music")
    .get()
    .then(
        collection =>{
             const docs = collection.docs.map(
                doc =>{
                    let item = doc.data();
                    item.id = doc.id;
                    return item;
                }
                
             )
             console.table(docs);
        }
        
    )
    .catch(console.error);