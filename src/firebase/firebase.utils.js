import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyAY-xHLe_CE5xeLmSR9kxl_HtnE68M1Dtc",
        authDomain: "crwn-db-5cc33.firebaseapp.com",
        databaseURL: "https://crwn-db-5cc33.firebaseio.com",
        projectId: "crwn-db-5cc33",
        storageBucket: "crwn-db-5cc33.appspot.com",
        messagingSenderId: "943239261304",
        appId: "1:943239261304:web:6cff80e5d81650efee918d",
        measurementId: "G-30HFE0FFKY"
      
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;