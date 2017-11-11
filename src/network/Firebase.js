import RNFetchBlob from 'react-native-fetch-blob';
import * as firebase from 'firebase';

export function getUserData(db, email, callback) {
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

export function getFeed(db, id, callback) {
    db.collection("posts").where("userId", "==", id).orderBy("date", "desc")
        .get()
        .then(function (querySnapshot) {
            callback(true, querySnapshot)
        })
        .catch(function (error) {
            callback(false)
            console.log("Error getting documents: ", error);
        });
}

export function createPost(db, userRef, timestamp, data, userId, imageRef, progressCallback, callback) {
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
        let uploadTask = imageRef.put(blob, { contentType: mime })
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes);
                progressCallback(progress)
            }, (error) => {
                callback(false)
                uploadBlob.close()
                window.XMLHttpRequest = temp
                window.Blob = tempBlob
            }, () => {
                var downloadURL = uploadTask.snapshot.downloadURL;
                uploadBlob.close()
                window.XMLHttpRequest = temp
                window.Blob = tempBlob
                db.collection("posts").add({
                    type: data.type,
                    description: data.description,
                    image: downloadURL,
                    userId: userId,
                    calories: data.cals,
                    date: timestamp,
                    user: userRef
                })
                .then((result) => {
                    callback(true, result.id)
                })
                .catch((error) => {
                    callback(false)
                });
            })
    })
}