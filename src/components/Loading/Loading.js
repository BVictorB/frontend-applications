const Loading = ({ loaded }) => {
  if (!loaded) {
    return (
      <div className="m-loading">
        <h1>Parking in Amsterdam</h1>
        <h2>Loading</h2>
        <div className="loading-circle"></div>
      </div>
    )
  } else {
    return null
  }
}

export default Loading