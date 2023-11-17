import React from 'react'

const Loading = () => {
  return (
    <div>
      <h2>Loadindg...</h2>
      <p>Hopefully not for too long :)</p>
    </div>
  )
}

export default Loading


// use this code on any page where you're using data or fetching data...and this component will load: await new Promise(resolve =>setTimeout(resolve, 3000))