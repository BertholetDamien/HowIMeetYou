const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {         
  response.send("Hello from Firebase!");
});

exports.createStory = functions.firestore
    .document('stories/{storyID}')
    .onCreate(event => {
    const newValue = event.data.data();

    return event.data.ref.set({
        first: newValue.first + "Test"
    }, {merge: true});
});