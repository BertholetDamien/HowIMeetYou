import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from '../firebase-config.json';

firebase.initializeApp(firebaseConfig);

export default ({ Vue }) => {
  Vue.prototype.$firebase = firebase;
};
