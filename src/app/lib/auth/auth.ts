import firebase from 'config/firebase'

export async function isLogin(): Promise<boolean> {
  return !!firebase.auth().onAuthStateChanged(user => user)
}