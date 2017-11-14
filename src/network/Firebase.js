import RNFetchBlob from 'react-native-fetch-blob';
import * as firebase from 'firebase';

export function getUserData(db, email, callback) {
  db.collection('users').where('email', '==', email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        callback(doc.id);
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
}

export function getFeed(db, id, callback) {
  db.collection('posts').where('userId', '==', id).orderBy('date', 'desc')
    .get()
    .then((querySnapshot) => {
      callback(true, querySnapshot);
    })
    .catch((error) => {
      callback(false);
      console.log('Error getting documents: ', error);
    });
}

export function createPost(db, userRef, timestamp, data, userId, imageRef, progressCallback, callback) {
  // Prepare polyfill
  const Blob = RNFetchBlob.polyfill.Blob;
  const fs = RNFetchBlob.fs;
  const temp = window.XMLHttpRequest;
  const tempBlob = window.Blob;
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob
  const mime = 'image/jpg';
  fs.readFile(data.path, 'base64')
    .then((returnData) => {
      return Blob.build(returnData, { type: `${mime};BASE64` });
    })
    .then((blob) => {
      const uploadBlob = blob;
      const uploadTask = imageRef.put(blob, { contentType: mime });
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes);
          progressCallback(progress);
        }, () => {
          callback(false);
          uploadBlob.close();
          window.XMLHttpRequest = temp;
          window.Blob = tempBlob;
        }, () => {
          const downloadURL = uploadTask.snapshot.downloadURL;
          uploadBlob.close();
          window.XMLHttpRequest = temp;
          window.Blob = tempBlob;
          db.collection('posts').add({
            type: data.type,
            description: data.description,
            image: downloadURL,
            userId: userId,
            calories: data.cals,
            date: timestamp,
            user: userRef,
          })
            .then((result) => {
              callback(true, result.id);
            })
            .catch(() => {
              callback(false);
            });
        },
      );
    });
}
