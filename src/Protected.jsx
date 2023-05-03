import { onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "./firebase"
import { useAuth } from "./store"
import Loading from "./UIkit/Loading/Loading"

const Protected = ({ children, returnIf, returnTo }) => {
  const [elem, setElem] = useState(<Loading />)
  const setUser = useAuth((st) => st.setUser)
  const navigate = useNavigate()
  onAuthStateChanged(auth, (userData) => {
    if (userData) {
      setElem(children)
      setUser(userData)
    } else {
      navigate("/start")
    }
  })
  return elem
}

export default Protected
