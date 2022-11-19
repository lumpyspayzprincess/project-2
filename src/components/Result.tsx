// import { Link } from "react-router-dom"

// interface CharacterProps {
//   id: number,
//   slug: string,
//   displayName: string,
//   speciies: string,
//   sex: string,
//   quotes: Array<string>
//   sprite: string
// }

// function Result({ id, displayName, quotes, sprite }: CharacterProps) {
//   return (<div className="column is-one-quarter-desktop is-one-third-tablet">
//       <Link to={`/result/${displayName}`}>
//       <div className="card" key={id}>
//         <div className="card-header">
//           <div className="card-header-title">You are {displayName}!</div>
//         </div>
//         <div className="card-image">
//           <figure className="image image-is-1by1">
//             <img src={sprite} alt={displayName} />
//           </figure>
//         </div>
//         <div className="card-content">
//           <h5>Here's one of their quotes:"{quotes[0]}"</h5>
//         </div>
//       </div>
//     </Link>
//   </div>)
// }

// export default Result