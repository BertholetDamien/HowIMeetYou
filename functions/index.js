const functions = require('firebase-functions');

exports.createStory = functions.firestore
    .document('stories/{storyID}')
    .onCreate(event => {
    const newValue = event.data.data();

    return event.data.ref.set({
        first: newValue.first + "Test",
        author_id: 42,
        status: 'active'
    }, {merge: true});
});

exports.onUserCreate = functions.auth.user().onCreate((event) => {
    const user = event.data;

    const email = user.email;
    const displayName = user.displayName;


});