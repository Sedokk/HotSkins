import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "./store"

const Protected = ({ children }) => {
  const user = useAuth((state) => state.user)
  if (!user) return <Navigate to='/' />
  return children
}

export default Protected
