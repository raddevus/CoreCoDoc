
window.addEventListener("load",initializeApp);
var localUser;
var db;

function initializeApp(){
    initializeFirebase();
    localUser = getLocalUser();
    if (localUser === null){
        addLocalUser();
        saveUserToFirebase();
    }
    displayUserId(localUser.id)
    loadUserFromFirebase();

}

function displayUserId(userId){
    // Add secret userId to password text box so user will know
    // it is there and can display it if she wants to.
    document.querySelector("#secretId").value = userId;
}

function addLocalUser(){
    localUser = new User(uuidv4());
    localStorage.setItem("user",JSON.stringify(localUser));
}

function getLocalUser(){
    console.log("getLocalUser()...");
    var user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user === null){
        console.log("There is no user key.");
        return null;
    }
    return user;
}

function loadUserFromFirebase(){
    var docRef = db.collection("users").doc(localUser.id);

    docRef.get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function saveUserToFirebase(){
    db.collection("users").doc(localUser.id.toString()).set(JSON.parse(JSON.stringify(localUser)))
    .then(function() {
        console.log("Document written successfully: " + localUser.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

function initializeFirebase(){
    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
        apiKey: apiKey,
        authDomain: 'corecodoc.firebaseapp.com',
        projectId: 'corecodoc'
        });
  
    db = firebase.firestore();
    console.log(db);
}

function uuidv4() {
    // got this from https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

class User{
    constructor(id){
        this.id = id;
        this.screenName = "";
        this.created = new Date();
    }
}