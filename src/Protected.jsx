import { onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { useAuth } from "./store"

const Protected = ({ children }) => {
  const [elem, setElem] = useState(<h2>Loading...</h2>)
  const setUser = useAuth((st) => st.setUser)
  const navigate = useNavigate()
  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      setElem(children)
      setUser(userData)
    } else {
      setElem(<h2>Loading...</h2>)
      navigate("/start")
    }
  })
  return elem
}

export default Protected
