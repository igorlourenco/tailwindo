import firebase from 'firebase/app'
import 'firebase/firestore'
import { User } from '../interfaces/user'

const firestore = firebase.firestore()

export async function createUser(uid: string, user: User) {
  return await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...user }, { merge: true })
}


export async function findUserById(email: string) {
  try {
    const snapshot = await firestore.collection('users').where('email', '==', email).get()

    const users = []

    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() })
    })

    return { user: users[0] }
  } catch (error) {
    return { error }
  }
}
