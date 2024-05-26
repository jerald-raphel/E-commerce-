import React from 'react'
import"./newsletter.css"


const newsletter = () => {
  const subscribe=()=>{
    alert("Subscription added succedfully")
  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <h2>Please Subscribe for join us!!!!</h2>
        <button onClick={subscribe}>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default newsletter
