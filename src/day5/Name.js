import React from 'react'
export default function Name({studetName}) {
if(studetName==="Harish"){
throw new Error("Harish name is not acceptable")
}
return ( <div>

<h1>My name is {studetName}</h1>
</div>)
}