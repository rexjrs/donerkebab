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
    db.collection("posts").where("userId", "==", id)
    .get()
    .then(function (querySnapshot) {
        callback(true,querySnapshot)
    })
    .catch(function (error) {
        callback(false)
        console.log("Error getting documents: ", error);
    });
}