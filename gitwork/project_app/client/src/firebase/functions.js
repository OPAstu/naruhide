import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./initialize";

export async function fb_login(Email, Password) {
    return new Promise(resolve => {
        signInWithEmailAndPassword(auth, Email, Password)
        .then(() => {
            resolve(true);
        })
        .catch(e => {
            resolve(false);
        })
    });
};