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