import firebase from "firebase/app";

const firebaseConfig = {
        apiKey: "AIzaSyChUQrVQjrCgFPQ6FoxH-LzlBfxhuCRMQc",
        authDomain: "testapp-2e681.firebaseapp.com",
        databaseURL: "https://testapp-2e681.firebaseio.com",
        projectId: "testapp-2e681",
        storageBucket: "testapp-2e681.appspot.com",
        messagingSenderId: "269056211679",
        appId: "1:269056211679:web:b204e1d4e400df8cee476a",
        measurementId: "G-DRVCTJY75X"
    };

export const firebaseApp = firebase.initializeApp(firebaseConfig);