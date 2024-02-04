// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryDetails

  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="avatar-image" />
      <h1 className="repo-name">{name}</h1>
      <div className="details-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars "
          className="star-image"
        />
        <p className="details-text">{starsCount} stars</p>
      </div>
      <div className="details-card">
        <img
          src=" https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt=" forks"
          className="fork-image"
        />
        <p className="details-text">{forksCount} forks</p>
      </div>
      <div className="details-card">
        <img
          src=" https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues "
          className="issue-image"
        />
        <p className="details-text">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
