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

// db.collection("music")
//     .get()p
//     .then(
//         collection =>{
//              const docs = collection.docs.map(
//                 doc =>{
//                     let item = doc.data();
//                     item.id = doc.id;
//                     return item;
//                 }
                
//              )
//              console.table(docs);
//         }
        
//     )
//     .catch(console.error);

const musicCollection = db.collection("music");

const song = {
        name: "Money in the Grave",
        artist : "Drake",
        genre : "Hip-Hop",
        year: 2020
}

// musicCollection.add (song)
//     .then ( message=> {
//         console.log ("Song has been aded ", message.id)
//     });

musicCollection
        .get()
        .then(x =>{
            const songs = x.docs.map(
                doc =>
                { 
                    let song = doc.data();
                    song.id = doc.id;
                    return song;
                }
            )
            console.table(songs)
        }

        )     
        .catch(console.error)