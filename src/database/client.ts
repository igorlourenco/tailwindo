import firebase from 'firebase/app'
import 'firebase/firestore'
import { Company } from '../interfaces/company'
import { User } from '../interfaces/user'

const firestore = firebase.firestore()

export async function createUser(uid: string, user: User) {
  return await firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...user }, { merge: true })
}

export async function createCompany(company: Company) {
	return await firestore
	  .collection('companies').add(company)
  }

export async function findCompanyByUser(id: string) {
  try {
    const snapshot = await firestore.collection('companies').where('ownerId', '==', id).get()

    const companies= []

    snapshot.forEach((doc) => {
		companies.push({ id: doc.id, ...doc.data() })
    })

    return { company: companies[0] }
  } catch (error) {
    return { error }
  }
}
