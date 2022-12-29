/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

export default async function Footer() {
    return (
        <footer>
            <a href="./">
            <img src={ "https://drive.google.com/uc?export=view&id=1-vBrrFCIrNFedbToIUhim1CU5gmrOOSk" } 
                alt="logo" style={{ width:"20rem", backgroundColor:"black", borderRadius:"40%" }} />
            </a>
            <div className="panel" style={{ fontFamily:"Poppins" }}>
                <a href="/teams/inertia">Inertia</a>
                <div style={{ 
                    background:"linear-gradient(90deg, rgb(0,212,255) 0%, rgb(48,64,192) 100%)",
                    backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
                 }}>
                    <h1 style={{ fontSize:"2rem" }}>Teams of the CanSat Competition</h1>
                </div>
                <a href="/teams/project-aaer">Project AAER</a>
            </div>
            <p>©SPAICS 2022-2023</p>
            <p>MIT License</p>
            <div className="panel">
                <a href="https://github.com/zLuminate/SPAICS" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=1Af-cF2NpUWts7b_k_LwZb3IKqlR-Q1ts" }
                        alt="Website Github Repo"
                    />
                </a>
                <a href="https://www.instagram.com/spaics_/" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=18NjFs4WzeE7xLv71KQvR1vl2we5Ahm4_" }
                        alt="SPAICS Instagram"
                    />
                </a>
                <a href="https://www.youtube.com/@spaics" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=1ywCSh6aXcQScxiCplJpbDxOM8cvOM7kY" }
                        alt="SPAICS Youtube"
                    />
                </a>
                <a href="https://www.tiktok.com/@spaics_" target="_blank" rel="noreferrer">
                    <img
                        src={ "https://drive.google.com/uc?export=view&id=1_mSf272M6HWDqXngIpFDXMCJgc4RsbIP" }
                        alt="SPAICS TikTok" style={{ scale:"1.375" }}
                    />
                </a>
            </div>
        </footer>
    );
}