import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCvJ7kkRJUPhR5a4D3_SJ0s-3ARRlgvaSg',
  authDomain: 'how-i-meet-you.firebaseapp.com',
  databaseURL: 'https://how-i-meet-you.firebaseio.com',
  projectId: 'how-i-meet-you',
  storageBucket: '',
  messagingSenderId: '809857462938',
};

firebase.initializeApp(config);

export default () => {
};
