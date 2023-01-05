import "./aaer.css"

export default async function TeamAAER() {
  const collagePhotos = []

  return (
    <div id="TeamAAER">
      <div style={{ height:"calc(100vh - 3rem)" }}>
        <div className="page">
          <div id="collage">
            {collagePhotos.map((id, index) => (
              <div className="photo" key={index}>
                <img src={ "https://drive.google.com/uc?export=view&id="+id } alt={ "photo_"+index } />
              </div>
            ))}
          </div>
          <div className="center" style={{ transition:".5s" }}>
            <p style={{ textAlign:"left", animationDelay:".5s" }} id="aaerSubHeading">NL CanSat Competition Team</p>
            <h1 id="aaerHeading">SPAICS Project AAER</h1>
            <p style={{ textAlign:"right", animationDelay:".75s" }} id="aaerSubHeading">Artificial Acceleration of Ecosystem Restoration</p>
          </div>
        </div>
      </div>
    </div>
  )
}