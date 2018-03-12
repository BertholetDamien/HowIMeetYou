<template>
  <q-page class="flex flex-center">
    <q-btn @click="logWithGoogle" label="Log with Google" />
    <q-btn @click="logWithGithub" label="Log with Github" />
    <q-btn @click="logWithFacebook" label="Log with Facebook" />
    <q-btn @click="logout" label="Logout" />
    <q-btn @click="deleteItem" label="Delete item" />
    <q-btn @click="addItem" label="Add item" />
    <q-btn @click="getAllItems" label="Get All items" />
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  methods: {
    getAllItems() {
      const collection = this.$db.collection('stories');
      collection.where('status', '==', 'active').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id);
          console.log(doc.data());
        });
      })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
    deleteItem() {
      const collection = this.$db.collection('stories');
      collection.doc('bUjRyZGQ1n3K1GVCPZ87').delete().then(() => console.log('Deleted!')).catch(error => console.error(error));
    },
    addItem() {
      const collection = this.$db.collection('stories');
      collection.add({
        first: 'Alan',
        middle: 'Mathison',
        last: 'Turing',
        born: 1912,
      })
        .then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch((error) => {
          console.error('Error adding document: ', error);
        });
    },
    logWithGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.logWith(provider);
    },
    logWithFacebook() {
      const provider = new this.$firebase.auth.FacebookAuthProvider();
      this.logWith(provider);
    },
    logWithGithub() {
      const provider = new this.$firebase.auth.GithubAuthProvider();
      this.logWith(provider);
    },
    logout() {
      this.$firebase.auth().signOut();
    },
    logWith(provider) {
      if (!this.$firebase.auth().currentUser) {
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

        this.$firebase.auth().signInWithPopup(provider).then((result) => {
          console.log(result.user);
        }).catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          } else {
            console.error(error);
          }
        });
      } else {
        console.log(this.$firebase.auth().currentUser);
        console.log('Already signin');
      }
    },
  },
};
</script>
