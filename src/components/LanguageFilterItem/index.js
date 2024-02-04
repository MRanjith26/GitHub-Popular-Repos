// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {filterDetails, isActive, getActiveFilterId} = props
  const {id, language} = filterDetails

  const activeButtonStyle = isActive ? 'act-button' : ''

  const onClickButton = () => {
    getActiveFilterId(id)
  }

  return (
    <li className="filter-item">
      <button
        type="button"
        className={`filter-button ${activeButtonStyle}`}
        onClick={onClickButton}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
