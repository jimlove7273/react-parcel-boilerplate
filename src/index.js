import React from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
  return (
    <div align="center">
      <h1>React Parcel Boilerplate!</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))