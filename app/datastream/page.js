'use client'

import './datas.css';
import AAER_Model from "../components/cansat_aaer"
import Inertia_Model from "../components/cansat_inertia"

export default function DataStreamPage() {
    return (
        <div style={{ paddingTop:"3rem" }}>
        <div className='linkable' onClick={() => {window.location.href = "/datastream/aaer"}}>
            <AAER_Model style={{ width:"100%", height:"20rem" }}/>
            <a>Project AAER</a>
        </div>
        <div className='linkable' onClick={() => {window.location.href = "/datastream/inertia"}}>
            <Inertia_Model style={{width:"100%", height:"20rem" }}/>
            <a>INERTIA</a>
        </div>
        </div>
    )
}