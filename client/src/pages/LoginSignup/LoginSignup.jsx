import { NavLink } from "react-router-dom"
import { Login } from "./components/Login"
import { Signup } from "./components/Signup"
import { useState } from "react"

export const LoginSignup = () => {
    const [signup, setSignup] = useState(false)

  return (
    <div>
        {signup ? <Signup /> : <Login setSignup={setSignup}/> }
        
    </div>
  )
}
