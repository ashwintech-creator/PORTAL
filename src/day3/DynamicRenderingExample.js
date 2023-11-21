import React from 'react'

export default function DynamicRenderingExample(isLoggedIn) {
  return (
    <div>
      {isLoggedIn?<p>Welcome user!!!</p>:<p>Please Log in</p>}
    </div>
  )
}
