'use client'

import './datas.css';
import { Redirect } from 'react-router-dom';
// import AAER_Model from "../components/cansat_aaer"
// import Inertia_Model from "../components/cansat_inertia"

export default function DataStreamPage() {
    return (
        // redirect to /aaer automatically on load
        <Redirect to="/aaer" />
    )
}