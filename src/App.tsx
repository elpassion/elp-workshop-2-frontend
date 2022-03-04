import React from "react"

const App: React.FC = () => {
  return (
    <>
      <div>
        <p className="tab-1">Open Weather Map API</p>
        <p className="tab-2">Rapid Weather API</p>
      </div>
      <label htmlFor="latitude">Latitude</label>
      <input id="latitude" type="number" />
      <label htmlFor="longitude">Longitude</label>
      <input id="longitude" type="number" />
      <button className="confirm-btn">Find Weather Details</button>
    </>
  )
}

export default App
