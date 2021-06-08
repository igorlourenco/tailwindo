import { firestore } from '../config/firebase-admin'

export async function getUserProcesses(uid: string) {
  try {
    const snapshot = await firestore
      .collection('users_processes')
      .where('userId', '==', uid)
      .where('isActive', '==', true)
      .get()

    const userProcesses = []

    snapshot.forEach((doc) => {
      userProcesses.push({ id: doc.id, ...doc.data() })
    })

    return { userProcesses }
  } catch (error) {
    return { error }
  }
}

export async function getAllProcesses() {
  try {
    const snapshot = await firestore.collection('processes').limit(30).get()

    const processes = []

    snapshot.forEach((doc) => {
      processes.push({ id: doc.id, ...doc.data() })
    })

    return { processes }
  } catch (error) {
    return { error }
  }
}

export async function findProcessById(id: string) {
  try {
    const snapshot = await firestore.collection('processes').where('id', '==', id).get()
    const processes = []

    snapshot.forEach((doc) => {
      processes.push({ id: doc.id, ...doc.data() })
    })

    return { process: processes[0] }
  } catch (error) {
    return { error }
  }
}
