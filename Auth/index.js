import firebase from "./config/firebase";
const auth = firebase.auth();

export function signUp({ name, email, password }) {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      return updateProfile({ displayName: name });
    })
    .catch((err) => {
      console.log(err);
    });
}

export function signIn(email, pass) {
  return auth.signInWithEmailAndPassword(email, pass);
}

export function updateProfile(data) {
  return auth.currentUser.updateProfile(data);
}

export function forgetPassword(email) {
  return auth.sendPasswordResetEmail(email);
}

export function updatePassword(password) {
  return auth.currentUser.updatePassword(password);
}

export function logout() {
  auth.signOut();
}

export { firebase, auth };
