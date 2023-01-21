export default function FireButton() {
    return(
        <>
        <style jsx>{`
            #fireButton {
                border: none;
                padding: 1rem;
                border-radius: 1rem;
                font-size: 2rem;
                background-color: #1c162e;
                transition: .5s;
                margin: 0 2rem;
                color: white;
            }

            #fireButton:hover {
                background-color: transparent;
                // background-color: #5c162e;
                cursor: pointer;
                scale: 1.1;
            }

            .particle {
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: red;
                z-index: 1000;
                opacity:1;
            }
        `}</style>
        <button 
            id="fireButton"
            onClick={() => {
                for (let i = 0; i < 10; i++) {
                    // make a particle
                    const particle = document.createElement("div");
                    particle.classList.add("particle");
                    document.body.appendChild(particle);
                    // set position to be in the center of the screen
                    particle.style.left = window.innerWidth / 2 + "px";
                    particle.style.top = window.innerHeight / 2 + "px";
                    // set a random size
                    const size = Math.random() * 50;
                    particle.style.width = 10 + size + "px";
                    particle.style.height = 10 + size + "px";
                }

                // setTimeout(() => {
                //     particles.forEach(p => {
                //         p.remove();
                //     });
                // }, 1000);
            }}
        >
            e{/* 🔥 */}
        </button>
        </>
    )
}