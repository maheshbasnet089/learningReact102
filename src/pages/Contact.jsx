

import { useEffect, useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [number,setNumber] = useState(0)
  const [number2,setNumber2] = useState(0)

  // jati khera ni render huda run hunchha , kehi ko state change huda run hunchha(1st)
  // useEffect(()=>{
  //   console.log("Hello")

  // })

  // first page mount huda yo vitra ko code run hunchha (2nd)
  useEffect(()=>{
    console.log("Hello")

  },[])

  // jaba tyo stateName ko state change/render hunchha (3rd)
  // useEffect(()=>{
  //   console.log("Hello")
    

  // },[number])
  return (
    <div>
       <h1>{number}</h1>
        <button onClick={()=>setNumber(number+1)}>Increase</button>
        <h1>{number2}</h1>
        <button onClick={()=>setNumber2(number2-1)}>Decrease</button>
    </div>
  )
}

export default Contact