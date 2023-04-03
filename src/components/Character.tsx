interface CharacterProps {
    name: string
    species: string
    // house: string
    // patronus: string
    // alive: boolean
    image: string
    gender:string
  
}

// changed Character so it overlapped r&m. Removed "Their patronus is {patronus !== "" ? patronus : "unknown"}." from h5
function Character({ name, species, image }: CharacterProps) {
  return (<div className="columns">
      <div className="" key={`${name}`}>
        <div>
          <div className="">{name}!</div>
        </div>
        <div>
          <figure className="image is-128x128">
            <img src={image !== "" ? image : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h5>{name} is a {species}.</h5>
        </div>
      </div>
  </div>)
}

export default Character