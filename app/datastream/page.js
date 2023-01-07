'use client'

import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { Line } from 'react-chartjs-2';

export default function DataStreamPage() {        
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_ApiKey,
        authDomain: process.env.NEXT_PUBLIC_AuthDomain,
        databaseURL: process.env.NEXT_PUBLIC_DatabaseURL,
        projectId: process.env.NEXT_PUBLIC_ProjectId,
        storageBucket: process.env.NEXT_PUBLIC_StorageBucket,
        messagingSenderId: process.env.NEXT_PUBLIC_MessagingSenderId,
        appId: process.env.NEXT_PUBLIC_AppId,
        measurementId: process.env.NEXT_PUBLIC_MeasurementId
    })
    const collectionRef = firebase.firestore().collection('spaics-23');
    const [aaer_data] = useDocumentData(collectionRef.doc('aaer'));
    const [inertia_data] = useDocumentData(collectionRef.doc('inertia'));

    return (
        <div style={{ paddingTop:"3rem" }}>
            <h1>aaer</h1>
            {JSON.stringify(inertia_data)}
            <h1>inertia</h1>
            {JSON.stringify(aaer_data)}
        </div>
    )
}