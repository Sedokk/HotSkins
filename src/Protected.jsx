import { onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase"

const Protected = ({ children }) => {
  const [elem, setElem] = useState(<h2>Loading...</h2>)
  const navigate = useNavigate()
  onAuthStateChanged(auth, (userData) => {
    if (userData) setElem(children)
    else {
      setElem(<h2>Loading...</h2>)
      navigate("/")
    }
  })
  return elem
}

export default Protected
