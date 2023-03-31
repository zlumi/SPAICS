'use client'

import Script from 'next/script';
import './datas.css';
// import AAER_Model from "../components/cansat_aaer"
// import Inertia_Model from "../components/cansat_inertia"

export default function DataStreamPage() {
    return (
        <Script id="L">{
            window.location.href = "/datastream/aaer"
        }</Script>
    )
}