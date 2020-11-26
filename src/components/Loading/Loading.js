import './loading.css'

const Loading = ({ loaded }) => {
  if (!loaded) {
    return (
      <div className="loading">
        <div className="loading-container">
          <h1 className="loading-text">Loading...</h1>
          <div className="loading-circle"></div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Loading