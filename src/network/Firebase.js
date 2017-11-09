import RNFetchBlob from 'react-native-fetch-blob';
import moment from 'moment';

export function getUserData(db,email,callback){
    db.collection("users").where("email", "==", email)
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            callback(doc.id)
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });
}

export function getFeed(db,id,callback){
    db.collection("posts").where("userId", "==", id).orderBy("date", "desc")
    .get()
    .then(function (querySnapshot) {
        callback(true,querySnapshot)
    })
    .catch(function (error) {
        callback(false)
        console.log("Error getting documents: ", error);
    });
}

export function uploadImage(db, userRef, timestamp, data, userId, imageRef,callback){
        //Prepare polyfill
        const Blob = RNFetchBlob.polyfill.Blob
        const fs = RNFetchBlob.fs
        let temp = window.XMLHttpRequest
        let tempBlob = window.Blob
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
        window.Blob = Blob
        let mime = 'image/jpg'
        fs.readFile(data.path, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                window.XMLHttpRequest = temp
                window.Blob = tempBlob
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                db.collection("posts").add({
                    type: data.type,
                    description: data.description,
                    image: url,
                    userId: userId,
                    calories: 200,
                    date: timestamp,
                    user: userRef
                })
                    .then(()=>{
                        callback('done!')
                        console.log("Document successfully written!");
                    })
                    .catch((error)=>{
                        console.error("Error writing document: ", error);
                    });
                console.log(url)
            })
            .catch((error) => {
                console.log(error)
            })
}