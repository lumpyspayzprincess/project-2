import { Link } from "react-router-dom"

interface CharacterProps {
  id: number,
  slug: string,
  displayName: string,
  speciies: string,
  sex: string,
  quotes: Array<string>
  sprite: string
}

function Character({ id, displayName, quotes, sprite }: CharacterProps) {
  return (<div className="column is-one-quarter-desktop is-one-third-tablet">
      <div className="card" key={id}>
        <div className="card-header">
          <div className="card-header-title">{displayName}!</div>
        </div>
        <div className="card-image">
          <figure className="image image-is-1by1">
            <img src={sprite} alt={displayName} />
            {/* imgur is not working now :() */}
          </figure>
        </div>
        <div className="card-content">
          <h5>Here's one of their quotes:"{quotes[0]}"</h5>
        </div>
      </div>
  </div>)
}

export default Character