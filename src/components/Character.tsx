interface CharacterProps {
    name: string
    species: string
    house: string
    patronus: string
    alive: boolean
    image: string
    gender:string
  
}

function Character({ name, species, image, patronus }: CharacterProps) {
  return (<div className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card" key={`${name}`}>
        <div className="card-header">
          <div className="card-header-title">{name}!</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={image !== "" ? image : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h5>{name} is a {species}. Their patronus is {patronus !== "" ? patronus : "unknown"}.</h5>
        </div>
      </div>
  </div>)
}

export default Character