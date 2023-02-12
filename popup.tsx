import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2> Extension to copy FreshRelease Tasks </h2>
    </div>
  )
}

export default IndexPopup
